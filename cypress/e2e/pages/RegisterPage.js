import BasePage from "./BasePage";

class RegisterPage extends BasePage{


    get firstnameInput() { return cy.get('#input-firstname'); }
    get lastnameInput() { return cy.get('#input-lastname'); }
    get emailInput() { return cy.get('#input-email'); }
    get telephoneInput() { return cy.get('#input-telephone'); }
    get passwordInput() { return cy.get('#input-password'); }
    get passwordConfirmInput() { return cy.get('#input-confirm'); }
    get policyCheckbox() { return cy.get('input[type="checkbox"][name="agree"]'); }
    get continueBtn() { return cy.get('input[type="submit"][value="Continue"]'); }


    enterfirstName(username) {
        this.firstnameInput.type(username);
        return this;
    }

    enterlastName(lastname) {
        this.lastnameInput.type(lastname);
        return this;
    }

    enterPassword(password) {
        this.passwordInput.type(password);
        return this;
    }

    enterConfirmPassword(password) {
        this.passwordConfirmInput.type(password);
        return this;
    }

    enterEmail(email) {
        this.emailInput.type(email);
        return this;
    }

    enterTelephone(telephone) {
        this.telephoneInput.type(telephone);
        return this;
    }

    confirmPolicy(value) {

        if(value) {
            this.policyCheckbox.check();
        } else {
            this.policyCheckbox.uncheck();
        }
        return this;
    }

    submitRegistraion() {
        this.continueBtn.click();
    }


}


export default new RegisterPage();

