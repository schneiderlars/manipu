const Bundle = require('./Bundle');
const Component = require('./Component');
const PumlConverter = require('./PumlConverter')

const fs = require('fs');
const {Command, flags} = require('@oclif/command');

class ManipuCommand extends Command {
  async run() {
    const {flags} = this.parse(ManipuCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from .\\src\\index.js`)


    const bundle = new Bundle("map-init");
    const c1 = new Component("Component1");
    const c2 = new Component("Component2");
    bundle.addComponent(c1);
    bundle.addComponent(c2);
    const result = PumlConverter.bundleToPuml(bundle); 
    fs.writeFile("test.puml", result, function(err) {
      if(err) {
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
}

module.exports = ManipuCommand
