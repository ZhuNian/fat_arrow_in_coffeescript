class @User extends Widget
  buildDom: ->
      @click_button = @element.find('#click_button')
  enhancePage: ->
    @print_this();

  initialize: ->

  print_this:(show_this) ->
    if show_this == undefined
      show_this = this;
    console.log('this is this in function\n')
    console.log(show_this)
