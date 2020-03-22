export function calculateTotal(amount,time){
    let interest

    switch (true) {
        case (amount<1000):
            interest=amount*.25    
            break;
        case (amount>1000 && amount<=5000):
            interest=amount*.20
            break;
        case (amount>5000 && amount<=10000):
            interest=amount*.15
            break;
        default:
            interest=amount*.10
            break;
    }
    alert(interest)
}