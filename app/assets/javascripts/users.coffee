class @User extends Widget
  buildDom: ->
      @click_button = @element.find('#click_button')
  enhancePage: ->
    @click_button.click ->
      console.log('this is this in a click function\n')
      console.log(this)
  initialize: ->
