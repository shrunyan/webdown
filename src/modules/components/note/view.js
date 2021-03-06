/**
 *	Note View
 */
define(function(require) {

	"use strict";


    var Backbone = require('backbone');
    var View = Backbone.View.extend({

		tagName: 'li',

		template: require('tmpl!./template'),

		render: function render() {
			console.log('NoteView:render', this);

			this.$el.data( 'id', this.model.id );

            this.$el.html( $( this.template( this.model.toJSON() )));

			return this;
		}

	});

	return View;

});
