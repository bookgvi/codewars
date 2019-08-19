    /*modal*/
    //    let frstModal = document.querySelector('.frst-popup')
    //    let Modal1 = new Modal(frstModal)
    //    .onclick = Modal1.modalOpen()
    
    // function Modal(open){
    
    //     this.open = open;
    //     this.close = document.querySelector('.popup-head span');
    //     let that = this;
    
    //     this.modalOpen = function(){
    //             that.open.style.display = "block"
    //     };
    
    //     this.modalClose = function() {
    //         that.open.style.display = "none"
    //     };
    
    //     // this.close.onclick = that.modalclose();
    
    // }
    function Modal(modal) {
            this.modal = document.querySelector('.frst-popup');
            this.btn1 = document.querySelector('.button-frst');
            this.btnOfpopup = document.querySelector('form .button-frst')
            self = this;

        this.popup = function(e) {                          // вот здесь нужно проверять на какую кнопку или элемент нажали 
                if (e.target == self.btn1)                  // (можно вместо if...else использовать switch...case)
                    self.modal.style.display = 'block'
                else if (e.target == self.btnOfpopup)
                    self.modal.style.display = 'none'
            }
    }

//    new Modal()

class ModalClass {
    constructor() {
        document.body.onclick = this.popup;
    }
    popup(e) {
        this.modal = document.querySelector('.frst-popup');
        this.btn1 = document.querySelector('.button-frst');
        this.btnOfpopup = document.querySelector('form .button-frst')
        if (e.target == this.btn1)                  
            this.modal.style.display = 'block'
        else if (e.target == this.btnOfpopup)
            this.modal.style.display = 'none'
    }
}

new ModalClass();

