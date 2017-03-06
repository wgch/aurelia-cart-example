export class Items {
    cart = [];
    totalBottles = 0;
    totalCases = 0;
    totalPrice = 0;
    contructor(cart, totalBottles, totalCases, totalPrice) {
        this.items = [];
        this.imageFolder = '';
        this.cart = cart;
        this.totalBottles = totalBottles;
        this.totalCases = totalCases;
        this.totalPrice = totalPrice;
    }
    created() {
        this.imageFolder = './src/assets/images/';
        this.items = [{
                'name': 'Breidecker',
                'bottlePrice': 17.90,
                'casePrice': 204.06,
                'image': this.imageFolder + 'Breidecker_small.jpg',
                'rate': 13,
                'bottleQuantity': 0,
                'caseQuantity': 0
            },
            {
                'name': 'Chardonnay',
                'bottlePrice': 18.90,
                'casePrice': 215.46,
                'image': this.imageFolder + 'chardonnay_v_1.png',
                'rate': 15,
                'bottleQuantity': 0,
                'caseQuantity': 0
            },
            {
                'name': 'Gewurztraminer',
                'bottlePrice': 22.90,
                'casePrice': 261.06,
                'image': this.imageFolder + 'Hunters_Gewurztraminer_NV_-_webv.png',
                'rate': 15,
                'bottleQuantity': 0,
                'caseQuantity': 0
            },
            {
                'name': 'Hakupapa Desert Reisling',
                'bottlePrice': 17.90,
                'casePrice': 204.06,
                'image': this.imageFolder + 'Hukapapa_v.png',
                'rate': 14,
                'bottleQuantity': 0,
                'caseQuantity': 0
            },
            {
                'name': 'Late Harvest Sauvignon Blanc (375ml)',
                'bottlePrice': 21.90,
                'casePrice': 262.80,
                'image': this.imageFolder + 'Hunters_Late_Harvest_Sauvignon-Blanc_NV_-_webv.png',
                'rate': 15,
                'bottleQuantity': 0,
                'caseQuantity': 0
            },
            {
                'name': 'MiruMiru (TM) Non-Vintage',
                'bottlePrice': 28.90,
                'casePrice': 149.40,
                'image': this.imageFolder + 'hunters_mirumiru_non_vintage_PNG_v3.png',
                'rate': 14,
                'bottleQuantity': 0,
                'caseQuantity': 0
            },
            {
                'name': 'MiruMiru (TM) Reserve',
                'bottlePrice': 34.00,
                'casePrice': 408.00,
                'image': this.imageFolder + 'hunters_mirumiru_non_vintage_PNG_v3.png',
                'rate': 13,
                'bottleQuantity': 0,
                'caseQuantity': 0
            },
            {
                'name': 'MiruMiru (TM) Rose',
                'bottlePrice': 34.00,
                'casePrice': 408.00,
                'image': this.imageFolder + 'hunters_mirumiru_non_vintage_PNG_v3.png',
                'bottleQuantity': 0,
                'caseQuantity': 0
            },
            {
                'name': 'Pinot Gris',
                'bottlePrice': 18.90,
                'casePrice': 215.86,
                'image': this.imageFolder + 'pinotnoir_small_v_1.png',
                'rate': 15,
                'bottleQuantity': 0,
                'caseQuantity': 0
            },
        ];
    }
    addToCart(selectedItem) {
        this.selectedItem = selectedItem;
        this.cart.push(this.selectedItem);
        this.totalBottles += Number(selectedItem.bottleQuantity);
        this.totalCases += Number(selectedItem.caseQuantity);
        this.totalPrice += Number((selectedItem.caseQuantity * this.selectedItem.casePrice) + (selectedItem.bottleQuantity * this.selectedItem.bottlePrice));
    }
    removeFromCart(selectedItem, index) {
        this.cart.splice(index, 1);
        this.totalBottles -= Number(selectedItem.bottleQuantity);
        this.totalCases -= Number(selectedItem.caseQuantity);
        this.totalPrice -= Number((selectedItem.caseQuantity * this.selectedItem.casePrice) + (selectedItem.bottleQuantity * this.selectedItem.bottlePrice))
    }
    emptyCart() {
        this.cart = [];
        this.totalBottles = 0;
        this.totalCases = 0;
        this.totalPrice = 0;
    }

    attached() {

    }
}
