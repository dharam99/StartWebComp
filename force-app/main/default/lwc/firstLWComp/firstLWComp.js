import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = 'to the World of Internet';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}