
window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

var columns = [
    Ember.Table.ColumnDefinition.create({
        columnWidth: 500,
        headerCellName: 'ID',
        contentPath: 'id'
    }),
    Ember.Table.ColumnDefinition.create({
        columnWidth: 500,
        headerCellName: 'Letter',
        contentPath: 'letter'
    }),
    Ember.Table.ColumnDefinition.create({
        columnWidth: 500,
        headerCellName: 'Percent',
        contentPath: 'number'
    }),
    Ember.Table.ColumnDefinition.create({
        columnWidth: 500,
        headerCellName: 'Now',
        contentPath: 'date'
    })];

var stuff = [];
var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
function generate_row(id){
    return {
        id: id,
        letter: random_element(letters),
        number: Math.ceil(Math.random() * 100),
        date: new Date()
    };


    function random_element(ary){
        var len = ary.length;
        var index = Math.floor(Math.random() * len);
        return ary[index];
    }
}
for (var i = 0; i < 100; i++){
    stuff.push(generate_row(i));
}

App.ApplicationController = Ember.ObjectController.extend({

    showDetails: false,
    things: columns,
    stuff: stuff

});

