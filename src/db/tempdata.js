const Coupons = [
    {
        name: 'Heavy Discount Coupon',
        code: 'hfe2n43o21',
        discount: 80
    },
    {
        name: 'Medium Discount Coupon',
        code: 'erfee3',
        discount: 50
    },
    {
        name: 'low Discount Coupon',
        code: '23efwe',
        discount: 30
    },
];
const Books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'JKRowling',
        onDiscount: true,
        coupon: Coupons[0]
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
        onDiscount: false,
        coupon: Coupons[2]
    },
];

export default { Books, Coupons };