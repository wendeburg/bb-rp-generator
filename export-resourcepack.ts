(function() {
    let generateRPbtn;

    let generateRPfn = function () {

    }

    BBPlugin.register('export-resourcepack', {
        title: 'Resourcepack Exporter',
        author: 'nonsenz',
        description: 'This plugin allows a project to be exported as a resourcepack.',
        icon: '__ADD_ICON__', // TODO: ADD ICON
        variant: 'both',
        onload() {
            generateRPbtn = new Action("export_resourcepack", {
                name: "Export Resourcepack",
                description: "Export the project as a resourcpack",
                icon: "fa-file-zipper",
                condition: () => true, // TODO: Change this
                click() {
                    generateRPfn();
                },
            }); 

            MenuBar.addAction(generateRPbtn, "file.export");
        }
    });
})();