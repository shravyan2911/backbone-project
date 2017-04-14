define( ['App', 'backbone', 'marionette', 'jquery', 'models/Model', 'hbs!templates/welcome'],
    function(App, Backbone, Marionette, $, Model, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend( {
            template: template,
            model: new Model({
                mobile: App.mobile
            }),

            // View Event Handlers
            events: {
                'click #size-selection': 'onSiteSelection'
            },

            onSiteSelection: function(e){

                //get the value of the checkbox.
                var value = $("input[type='checkbox']").val();

                var model = new Model();
                model.save({value}); //save models value

            }
        });
    });