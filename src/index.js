const ManifestReader = require('./ManifestReader');
const PumlConverter = require('./PumlConverter');

const fs = require('fs');
const {Command, flags} = require('@oclif/command');

class ManipuCommand extends Command {

  async run() {
    const {flags} = this.parse(ManipuCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from .\\src\\index.js`)
    this.log(flags.path);

    let bundle = ManifestReader(flags.path +  "/manifest.json").getBundle();
    const result = PumlConverter.bundleToPuml(bundle);
    fs.writeFile(flags.path + "/bundle.puml", result, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
  }
}

ManipuCommand.description = `Describe the command here
...
Extra documentation goes here
`

ManipuCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
  path: flags.string({char: 'p', description: 'dir of manifest.json'})
};

module.exports = ManipuCommand
