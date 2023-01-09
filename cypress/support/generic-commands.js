import GenericFunctions from "../pageObjects/helpers/genericFunctions"

const genericFunctions = new GenericFunctions()

Cypress.Commands.add("clickSelectedButton",buttonName=>
{
    genericFunctions.clickButton(buttonName)
})