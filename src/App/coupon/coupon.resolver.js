import tempdata from '../../db/tempdata'


const coupon = () => {
    return tempdata.Coupons;
}

export default {
    Query: {
        coupon
    }
}