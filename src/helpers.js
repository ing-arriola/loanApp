export function calculateTotal(amount,time){
    let interest
    let interestForTime

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

    switch (time) {
        case 3:
            interestForTime=amount*.05    
            break;
        case 6:
            interestForTime=amount*.10
            break;
        case 12:
            interestForTime=amount*.15
            break;
        case 24:
            interestForTime=amount*.20
            break;
        default :
            break
    }

    return interest+interestForTime+amount
    
}