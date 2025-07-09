// Data konfigurasi form untuk setiap layanan
const serviceConfigs = {
    'Pulsa': {
        fields: [
            { type: 'tel', name: 'phoneNumber', label: 'Nomor Telepon', required: true },
            { type: 'select', name: 'provider', label: 'Provider',
              options: ['Telkomsel', 'Indosat', 'XL', 'Tri', 'Smartfren'], required: true },
            { type: 'select', name: 'nominal', label: 'Nominal Pulsa', options: [5000, 10000, 20000, 25000, 50000, 100000], required: true }
        ]
    },
    'Paket Data': {
        fields: [
            { type: 'tel', name: 'phoneNumber', label: 'Nomor Telepon', required: true },
            { type: 'select', name: 'provider', label: 'Provider', 
              options: ['Telkomsel', 'Indosat', 'XL', 'Tri', 'Smartfren'], required: true },
            { type: 'select', name: 'package', label: 'Pilih Paket', 
              options: [
                '2GB - Rp 10.000',
                '4GB - Rp 20.000',
                '8GB - Rp 50.000',
                '16GB - Rp 100.000',
                '32GB - Rp 150.000'
              ], required: true }
        ]
    },
    'E-Wallet': {
        fields: [
            { type: 'tel', name: 'phoneNumber', label: 'Nomor Telepon/ID', required: true },
            { type: 'select', name: 'wallet', label: 'Jenis E-Wallet',
              options: ['DANA', 'OVO', 'GoPay', 'ShopeePay', 'LinkAja'], required: true },
            { type: 'select', name: 'nominal', label: 'Nominal',
              options: [10000, 20000, 50000, 100000, 200000], required: true }
        ]
    },
    'Game': {
        fields: [
            { type: 'text', name: 'userId', label: 'User ID Game', required: true },
            { type: 'select', name: 'game', label: 'Pilih Game',
              options: ['Mobile Legends', 'PUBG Mobile', 'Free Fire', 'Genshin Impact'], required: true },
            { type: 'select', name: 'diamonds', label: 'Pilih Paket Diamond',
              options: [
                '100 DM - Rp 20.000',
                '200 DM - Rp 40.000',
                '500 DM - Rp 95.000',
                '1000 DM - Rp 185.000',
                '2000 DM - Rp 360.000'
              ], required: true }
        ]
    },
    'Token PLN': {
        fields: [
            { type: 'text', name: 'meterNumber', label: 'Nomor Meter/ID Pelanggan', required: true },
            { type: 'select', name: 'nominal', label: 'Nominal Token',
              options: [20000, 50000, 100000, 200000, 500000], required: true }
        ]
    },
    'Pulsa Transfer': {
        fields: [
            { type: 'tel', name: 'senderPhone', label: 'Nomor Pengirim', required: true },
            { type: 'tel', name: 'receiverPhone', label: 'Nomor Penerima', required: true },
            { type: 'select', name: 'nominal', label: 'Nominal Transfer',
              options: [25000, 50000, 100000, 200000], required: true }
        ]
    },
    'Telp & SMS': {
        fields: [
            { type: 'tel', name: 'phoneNumber', label: 'Nomor Telepon', required: true },
            { type: 'select', name: 'type', label: 'Jenis Paket',
              options: ['Telepon', 'SMS', 'Telepon + SMS'], required: true },
            { type: 'select', name: 'nominal', label: 'Nominal Paket',
              options: [5000, 10000, 25000, 50000], required: true }
        ]
    },
    'Masa Aktif': {
        fields: [
            { type: 'tel', name: 'phoneNumber', label: 'Nomor Telepon', required: true },
            { type: 'select', name: 'package', label: 'Pilih Paket',
              options: [
                '7 Hari - Rp 10.000',
                '30 Hari - Rp 20.000',
                '90 Hari - Rp 50.000',
                '365 Hari - Rp 100.000'
              ], required: true }
        ]
    }
};

// Elements
const modal = document.getElementById('orderModal');
const closeBtn = document.querySelector('.close-modal');
const orderForm = document.getElementById('orderForm');
const modalTitle = document.getElementById('modalTitle');
const dynamicFormFields = document.getElementById('dynamicFormFields');
const serviceItems = document.querySelectorAll('.service-item');

// Fungsi untuk membuat elemen form
function createFormField(field) {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'form-group';

    const label = document.createElement('label');
    label.setAttribute('for', field.name);
    label.textContent = field.label;
    fieldDiv.appendChild(label);

    if (field.type === 'select') {
        const select = document.createElement('select');
        select.id = field.name;
        select.name = field.name;
        select.required = field.required;

        field.options.forEach(option => {
            const optionElement = document.createElement('option');
            if (typeof option === 'number') {
                optionElement.value = option;
                optionElement.textContent = `Rp ${option.toLocaleString('id-ID')}`;
            } else {
                optionElement.value = option;
                optionElement.textContent = option;
            }
            select.appendChild(optionElement);
        });

        fieldDiv.appendChild(select);
    } else {
        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.name;
        input.name = field.name;
        input.required = field.required;
        fieldDiv.appendChild(input);
    }

    return fieldDiv;
}

// Fungsi untuk menampilkan modal
function showModal(serviceName) {
    modalTitle.textContent = `Pesan ${serviceName}`;
    generateFormFields(serviceName);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Mencegah scroll
}

// Fungsi untuk generate form fields berdasarkan layanan
function generateFormFields(serviceName) {
    dynamicFormFields.innerHTML = ''; // Bersihkan form fields yang ada
    const config = serviceConfigs[serviceName];
    
    if (config && config.fields) {
        config.fields.forEach(field => {
            const fieldElement = createFormField(field);
            dynamicFormFields.appendChild(fieldElement);
        });
    }
}

// Event listeners
serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        const serviceName = item.querySelector('p').textContent;
        showModal(serviceName);
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Kembalikan scroll
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Elements for payment modal
const paymentModal = document.getElementById('paymentModal');
const closePaymentBtn = document.querySelector('.close-payment-modal');
const confirmPaymentBtn = document.getElementById('confirmPayment');
const paymentMethod = document.getElementById('paymentMethod');
const paymentDetails = document.getElementById('paymentDetails');
const qrisPayment = document.getElementById('qrisPayment');
const bankPayment = document.getElementById('bankPayment');
const ewalletPayment = document.getElementById('ewalletPayment');
const ewalletButtons = document.querySelectorAll('.ewallet-btn');

// Store order data globally
let currentOrderData = null;

// Function to generate transaction number
function generateTransactionNumber() {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `TRX${year}${month}${day}${random}`;
}

// Function to extract price from package string
function extractPrice(packageStr) {
    const priceMatch = packageStr.match(/Rp\s+(\d+(?:[.,]\d+)*)/i);
    if (priceMatch) {
        return parseInt(priceMatch[1].replace(/[.,]/g, ''));
    }
    return 0;
}

// Function to show selected payment method
function showSelectedPayment(method) {
    // Hide all payment sections first
    qrisPayment.style.display = 'none';
    bankPayment.style.display = 'none';
    ewalletPayment.style.display = 'none';

    // Show the selected payment section
    switch(method) {
        case 'qris':
            qrisPayment.style.display = 'block';
            break;
        case 'bank':
            bankPayment.style.display = 'block';
            break;
        case 'ewallet':
            ewalletPayment.style.display = 'block';
            break;
    }
}

// Handle e-wallet button clicks
ewalletButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        ewalletButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
    });
});

// Close payment modal
closePaymentBtn.addEventListener('click', () => {
    paymentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Handle form submission
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const service = modalTitle.textContent.replace('Pesan ', '');
    const config = serviceConfigs[service];
    const formData = {
        service: service,
        paymentMethod: document.getElementById('paymentMethod').value
    };

    // Mengumpulkan data dari form fields yang dinamis
    if (config && config.fields) {
        config.fields.forEach(field => {
            const element = document.getElementById(field.name);
            if (element) {
                formData[field.name] = element.value;
            }
        });
    }

    // Extract price from package if available
    let totalPrice = 0;
    if (formData.package) {
        totalPrice = extractPrice(formData.package);
    } else if (formData.diamonds) {
        totalPrice = extractPrice(formData.diamonds);
    } else if (formData.nominal) {
        totalPrice = parseInt(formData.nominal);
    }

    // Generate transaction number
    const transactionNumber = generateTransactionNumber();

    // Store order data
    currentOrderData = {
        ...formData,
        totalPrice,
        transactionNumber
    };

    // Update payment details display
    document.getElementById('paymentAmount').textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    document.getElementById('transactionNumber').textContent = `No. Transaksi: ${transactionNumber}`;

    // Tampilkan ringkasan pesanan
    let orderSummary = 'Ringkasan Pesanan:\n\n';
    for (const [key, value] of Object.entries(formData)) {
        if (key !== 'paymentMethod') {
            orderSummary += `${key}: ${value}\n`;
        }
    }

    // Tampilkan konfirmasi pesanan
    if (confirm(orderSummary + '\nApakah pesanan sudah benar?')) {
        // Tutup modal pemesanan
        modal.style.display = 'none';
        
        // Tampilkan modal pembayaran
        paymentModal.style.display = 'block';
        showSelectedPayment(formData.paymentMethod);
    }
});

// Handle payment confirmation
confirmPaymentBtn.addEventListener('click', () => {
    if (!currentOrderData) return;

    let orderDetails;
    if (currentOrderData.service === 'Flash Sale') {
        orderDetails = `*Detail Pesanan Flash Sale*%0A%0A`;
        orderDetails += `No. Transaksi: ${currentOrderData.transactionNumber}%0A`;
        orderDetails += `Produk: ${currentOrderData.productName}%0A`;
        orderDetails += `Total: Rp ${currentOrderData.totalPrice.toLocaleString('id-ID')}%0A`;
        orderDetails += `Metode Pembayaran: QRIS`;
    } else {
        const paymentMethod = currentOrderData.paymentMethod;

        // Validate e-wallet selection if needed
        if (paymentMethod === 'ewallet') {
            const selectedWallet = document.querySelector('.ewallet-btn.active');
            if (!selectedWallet) {
                alert('Silakan pilih e-wallet yang akan digunakan');
                return;
            }
            currentOrderData.ewalletType = selectedWallet.dataset.wallet;
        }

        // Generate simplified order details
        orderDetails = `*Detail Pesanan*%0A%0A`;
        orderDetails += `No. Transaksi: ${currentOrderData.transactionNumber}%0A`;
        orderDetails += `Layanan: ${currentOrderData.service}%0A`;
        
        // Add provider info for Pulsa service
        if (currentOrderData.service === 'Pulsa') {
            // Extract provider from phone number prefix or use provider field if exists
            let provider = currentOrderData.provider || getProviderFromNumber(currentOrderData.phoneNumber);
            orderDetails += `Provider: ${provider}%0A`;
        }
        
        orderDetails += `Nomor HP: ${currentOrderData.phoneNumber || currentOrderData.senderPhone || '-'}%0A`;
        orderDetails += `Nominal: Rp ${currentOrderData.totalPrice.toLocaleString('id-ID')}%0A`;
        orderDetails += `Metode Pembayaran: ${paymentMethod.toUpperCase()}`;
        if (paymentMethod === 'ewallet') {
            orderDetails += ` (${currentOrderData.ewalletType})`;
        }
    }

    // Redirect to WhatsApp
    const waURL = `https://wa.me/6283189485321?text=${orderDetails}`;
    window.open(waURL, '_blank');

    // Reset everything
    if (currentOrderData.service !== 'Flash Sale') {
        orderForm.reset();
        ewalletButtons.forEach(btn => btn.classList.remove('active'));
    }
    currentOrderData = null;
    paymentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Function to determine provider from phone number
function getProviderFromNumber(phoneNumber) {
    if (!phoneNumber) return 'Unknown';
    
    // Remove any spaces, dashes, or country code
    const cleanNumber = phoneNumber.replace(/[\s-]/g, '').replace(/^\+62|^0/, '');
    
    // Common Indonesian provider prefixes
    const prefixes = {
        telkomsel: ['811', '812', '813', '821', '822', '823', '851', '852', '853'],
        indosat: ['814', '815', '816', '855', '856', '857', '858'],
        xl: ['817', '818', '819', '859', '877', '878'],
        tri: ['895', '896', '897', '898', '899'],
        smartfren: ['881', '882', '883', '884', '885', '886', '887', '888', '889']
    };
    
    // Check the prefix against known providers
    for (const [provider, providerPrefixes] of Object.entries(prefixes)) {
        if (providerPrefixes.some(prefix => cleanNumber.startsWith(prefix))) {
            return provider.charAt(0).toUpperCase() + provider.slice(1);
        }
    }
    
    return 'Unknown';
}

// Close payment modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === paymentModal) {
        paymentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle flash sale product clicks
const flashSaleProducts = document.querySelectorAll('.product-card');
flashSaleProducts.forEach(product => {
    const productDetails = document.createElement('div');
    productDetails.className = 'product-details-wrapper';
    
    // Move existing product details into the new wrapper
    const iconWrapper = product.querySelector('.product-icon-wrapper');
    const details = product.querySelector('.product-details');
    productDetails.appendChild(iconWrapper);
    productDetails.appendChild(details);
    
    // Clear product card and add the wrapped content
    product.innerHTML = '';
    product.appendChild(productDetails);
    
    // Add buy button
    const buyButton = document.createElement('button');
    buyButton.className = 'buy-button';
    buyButton.textContent = 'Beli Sekarang';
    product.appendChild(buyButton);

    buyButton.addEventListener('click', () => {
        const productName = product.querySelector('.product-details p').textContent;
        const salePrice = product.querySelector('.sale-price').textContent;
        const price = parseInt(salePrice.replace(/[^0-9]/g, ''));
        
        showFlashSalePayment(productName, price);
    });
});

// Function to show payment modal for flash sale items
function showFlashSalePayment(productName, price) {
    currentOrderData = {
        service: 'Flash Sale',
        productName: productName,
        totalPrice: price,
        transactionNumber: generateTransactionNumber()
    };

    // Update payment details display
    document.getElementById('paymentAmount').textContent = `Rp ${price.toLocaleString('id-ID')}`;
    document.getElementById('transactionNumber').textContent = `No. Transaksi: ${currentOrderData.transactionNumber}`;

    // Show payment modal
    paymentModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Mencegah scroll
    showSelectedPayment('qris'); // Default to QRIS payment
}

// Flash sale countdown timer
function updateCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 0); // 1 hari dari sekarang
    endDate.setHours(23, 59, 59); // Set ke akhir hari

    function update() {
        const now = new Date();
        const diff = endDate - now;

        if (diff <= 0) {
            document.getElementById('countdown').textContent = 'Flash Sale Berakhir';
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdown').textContent = 
            `${hours}j ${minutes}m ${seconds}d`;

        setTimeout(update, 1000);
    }

    update();
}

// Initialize countdown
updateCountdown();

// Chat functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatAdminBtn = document.getElementById('chatAdminBtn');
    const adminWhatsApp = '6282111136720'; // Ganti dengan nomor WhatsApp admin yang sebenarnya

    chatAdminBtn.addEventListener('click', () => {
        const message = 'Halo Admin, saya ingin bertanya'; // Pesan default
        const whatsappURL = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});