class GenericFunctions
{
    clickButton(buttonName)
    {
        cy.contains('button',buttonName).click()
    }
}
export default GenericFunctions