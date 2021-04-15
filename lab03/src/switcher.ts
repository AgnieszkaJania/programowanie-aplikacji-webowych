class SwitcherButton{
    container: HTMLElement;
    switcher: HTMLButtonElement;
    constructor(){
        this.container = document.getElementById('menuContainer');
        this.switcher = <HTMLButtonElement>document.createElement('button');
        this.switcher.innerText="Change";
        this.container.appendChild(this.switcher);
        this.switcher.addEventListener('click', () =>{
           if(document.body.getAttribute('data-theme') == 'sweets'){
                document.body.setAttribute('data-theme','gloomySunday');
           }else{
            document.body.setAttribute('data-theme','sweets');
           }
        })
    }
}

export default SwitcherButton;