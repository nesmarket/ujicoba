// Promo codes with their discounts
const promoCodes = {
    'NESMARKET10': {
        discount: 10, // 10% discount
        type: 'percentage',
        description: 'Diskon 10%'
    },
    'HEMAT5000': {
        discount: 5000, // 5000 rupiah discount
        type: 'fixed',
        description: 'Potongan Rp 5.000'
    },
    'NEWUSER': {
        discount: 15, // 15% discount
        type: 'percentage',
        description: 'Diskon 15% untuk pengguna baru'
    },
    'FLASHSALE': {
        discount: 3000, // 3000 rupiah discount
        type: 'fixed',
        description: 'Potongan Rp 3.000'
    },
    'WEEKEND20': {
        discount: 20, // 20% discount
        type: 'percentage',
        description: 'Diskon 20% weekend'
    }
};

// Flash sale products with their specific prices
const flashSaleProducts = {
    'Bot Push Kontak 1 Hari': {
        originalPrice: 9000,
        salePrice: 3000,
        discount: 63
    },
    'LOGO JB TEK': {
        originalPrice: 12000,
        salePrice: 3000,
        discount: 75
    }
};

// Service data untuk form dinamis
const serviceData = {
    'Pulsa': {
        fields: [
            { label: 'Provider', type: 'select', name: 'provider', options: ['Telkomsel', 'Indosat', 'XL', 'Tri', 'Smartfren', 'Axis', 'By.U'], required: true },
            { label: 'Nomor HP', type: 'tel', name: 'phoneNumber', placeholder: '08xxxxxxxxxx', required: true },
            { label: 'Nominal', type: 'select', name: 'amount', options: ['5.000', '10.000', '15.000', '20.000', '25.000', '50.000', '100.000'], required: true }
        ],
        basePrice: 2000,
        pricing: {
            'amount': {
                '5.000': 7000,
                '10.000': 12000,
                '15.000': 17000,
                '20.000': 22000,
                '25.000': 27000,
                '50.000': 52000,
                '100.000': 102000
            }
        }
    },
    'Paket Data': {
        fields: [
            { label: 'Provider', type: 'select', name: 'provider', options: ['Telkomsel', 'Indosat', 'XL', 'Tri', 'Smartfren', 'Axis', 'By.U'], required: true },
            { label: 'Nomor HP', type: 'tel', name: 'phoneNumber', placeholder: '08xxxxxxxxxx', required: true },
            { label: 'Paket', type: 'select', name: 'package', options: ['1GB - 7 Hari', '2GB - 14 Hari', '5GB - 30 Hari', '10GB - 30 Hari'], required: true }
        ],
        basePrice: 5000,
        pricing: {
            'package': {
                '1GB - 7 Hari': 8000,
                '2GB - 14 Hari': 15000,
                '5GB - 30 Hari': 25000,
                '10GB - 30 Hari': 45000
            }
        }
    },
    'E-Wallet': {
        fields: [
            { label: 'Nomor HP/Email', type: 'text', name: 'account', placeholder: 'Nomor HP atau Email', required: true },
            { label: 'Platform', type: 'select', name: 'platform', options: ['DANA', 'GoPay', 'OVO', 'ShopeePay'], required: true },
            { label: 'Nominal', type: 'select', name: 'amount', options: ['10.000', '20.000', '50.000', '100.000', '200.000'], required: true }
        ],
        basePrice: 1000,
        pricing: {
            'amount': {
                '10.000': 11000,
                '20.000': 21000,
                '50.000': 51000,
                '100.000': 101000,
                '200.000': 201000
            }
        }
    },
    'Game': {
        fields: [
            { label: 'Game', type: 'select', name: 'game', options: ['Mobile Legends', 'Free Fire', 'PUBG Mobile', 'Genshin Impact', 'Valorant'], required: true },
            { label: 'User ID', type: 'text', name: 'userId', placeholder: 'Masukkan User ID', required: true },
            { label: 'Nominal', type: 'select', name: 'amount', options: ['Diamond 86', 'Diamond 172', 'Diamond 257', 'Diamond 344'], required: true }
        ],
        basePrice: 5000,
        pricing: {
            'amount': {
                'Diamond 86': 20000,
                'Diamond 172': 35000,
                'Diamond 257': 50000,
                'Diamond 344': 65000
            }
        }
    },
    'Token PLN': {
        fields: [
            { label: 'Nomor Meter', type: 'text', name: 'meterNumber', placeholder: 'Nomor Meter PLN', required: true },
            { label: 'Nominal', type: 'select', name: 'amount', options: ['20.000', '50.000', '100.000', '200.000', '500.000'], required: true }
        ],
        basePrice: 1000,
        pricing: {
            'amount': {
                '20.000': 21000,
                '50.000': 51000,
                '100.000': 101000,
                '200.000': 201000,
                '500.000': 501000
            }
        }
    },
    'Masa Aktif': {
        fields: [
            { label: 'Nomor HP', type: 'tel', name: 'phoneNumber', placeholder: '08xxxxxxxxxx', required: true },
            { label: 'Provider', type: 'select', name: 'provider', options: ['Telkomsel', 'Indosat', 'XL', 'Tri', 'Smartfren'], required: true },
            { label: 'Durasi', type: 'select', name: 'duration', options: ['7 Hari', '15 Hari', '30 Hari', '60 Hari'], required: true }
        ],
        basePrice: 3000,
        pricing: {
            'duration': {
                '7 Hari': 8000,
                '15 Hari': 15000,
                '30 Hari': 25000,
                '60 Hari': 45000
            }
        }
    },
    'Akun Game': {
        fields: [
            { label: 'Game', type: 'select', name: 'game', options: ['Mobile Legends', 'Free Fire', 'PUBG Mobile', 'Genshin Impact'], required: true },
            { label: 'Tipe Akun', type: 'select', name: 'accountType', options: ['Akun Baru', 'Akun Sultan', 'Akun Rare'], required: true },
            { label: 'Spesifikasi', type: 'textarea', name: 'specifications', placeholder: 'Deskripsikan spesifikasi yang diinginkan', required: true }
        ],
        basePrice: 25000,
        pricing: {
            'accountType': {
                'Akun Baru': 50000,
                'Akun Sultan': 150000,
                'Akun Rare': 300000
            }
        }
    },
    'Suntik Sosmed': {
        fields: [
            { label: 'Platform', type: 'select', name: 'platform', options: ['Instagram', 'TikTok', 'YouTube', 'Facebook', 'Twitter'], required: true },
            { label: 'Username/Link', type: 'text', name: 'username', placeholder: 'Username atau link profil', required: true },
            { label: 'Layanan', type: 'select', name: 'service', options: ['Followers', 'Likes', 'Views', 'Comments'], required: true },
            { label: 'Jumlah', type: 'select', name: 'quantity', options: ['1000', '5000', '10000', '25000', '50000'], required: true }
        ],
        basePrice: 5000,
        pricing: {
            'quantity': {
                '1000': 15000,
                '5000': 35000,
                '10000': 65000,
                '25000': 125000,
                '50000': 225000
            }
        }
    },
    'Pulsa Transfer': {
        fields: [
            { label: 'Nomor Pengirim', type: 'tel', name: 'senderNumber', placeholder: '08xxxxxxxxxx', required: true },
            { label: 'Nomor Penerima', type: 'tel', name: 'receiverNumber', placeholder: '08xxxxxxxxxx', required: true },
            { label: 'Nominal', type: 'select', name: 'amount', options: ['5.000', '10.000', '15.000', '20.000', '25.000'], required: true }
        ],
        basePrice: 2000,
        pricing: {
            'amount': {
                '5.000': 7000,
                '10.000': 12000,
                '15.000': 17000,
                '20.000': 22000,
                '25.000': 27000
            }
        }
    },
    'Telp & SMS': {
        fields: [
            { label: 'Nomor HP', type: 'tel', name: 'phoneNumber', placeholder: '08xxxxxxxxxx', required: true },
            { label: 'Paket', type: 'select', name: 'package', options: ['Telp 100 Menit', 'SMS 100', 'Combo Telp+SMS'], required: true },
            { label: 'Provider', type: 'select', name: 'provider', options: ['Telkomsel', 'Indosat', 'XL', 'Tri'], required: true }
        ],
        basePrice: 5000,
        pricing: {
            'package': {
                'Telp 100 Menit': 12000,
                'SMS 100': 8000,
                'Combo Telp+SMS': 18000
            }
        }
    }
};

// DOM Elements
const orderModal = document.getElementById('orderModal');
const paymentModal = document.getElementById('paymentModal');
const closeModal = document.querySelector('.close-modal');
const closePaymentModal = document.querySelector('.close-payment-modal');
const orderForm = document.getElementById('orderForm');
const dynamicFormFields = document.getElementById('dynamicFormFields');
const modalTitle = document.getElementById('modalTitle');

// Payment elements
const qrisPayment = document.getElementById('qrisPayment');
const bankPayment = document.getElementById('bankPayment');
const ewalletPayment = document.getElementById('ewalletPayment');
let paymentAmount = document.getElementById('paymentAmount');
let transactionNumber = document.getElementById('transactionNumber');

// Chat admin button
const chatAdminBtn = document.getElementById('chatAdminBtn');

// Store selected payment method
let selectedPaymentMethod = 'qris';

// Store applied promo code
let appliedPromoCode = null;

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeServiceItems();
    initializeModals();
    initializePaymentMethods();
    initializeChatAdmin();
    initializeCountdown();
});

// Initialize service items click handlers
function initializeServiceItems() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceName = this.querySelector('p').textContent.trim();
            openOrderModal(serviceName);
        });
        
        // Add hover effect
        item.style.cursor = 'pointer';
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Open order modal with dynamic form
function openOrderModal(serviceName) {
    modalTitle.textContent = `Pesan ${serviceName}`;
    
    // Reset applied promo code when opening new order
    appliedPromoCode = null;
    
    if (serviceData[serviceName]) {
        generateDynamicForm(serviceData[serviceName].fields);
        orderModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        // Fallback untuk layanan yang belum terdefinisi
        generateGenericForm(serviceName);
        orderModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Generate dynamic form fields
function generateDynamicForm(fields) {
    dynamicFormFields.innerHTML = '';
    
    fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.textContent = field.label + ':';
        label.setAttribute('for', field.name);
        
        let input;
        
        if (field.type === 'select') {
            input = document.createElement('select');
            input.innerHTML = '<option value="">Pilih ' + field.label + '</option>';
            
            field.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                input.appendChild(optionElement);
            });
        } else if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.placeholder = field.placeholder || '';
            input.rows = 4;
        } else {
            input = document.createElement('input');
            input.type = field.type;
            input.placeholder = field.placeholder || '';
        }
        
        input.name = field.name;
        input.id = field.name;
        if (field.required) {
            input.required = true;
        }
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        dynamicFormFields.appendChild(formGroup);
    });
    
    // Add promo code field
    addPromoCodeField();
}

// Generate generic form for undefined services
function generateGenericForm(serviceName) {
    dynamicFormFields.innerHTML = `
        <div class="form-group">
            <label for="serviceDetails">Detail Layanan:</label>
            <textarea id="serviceDetails" name="serviceDetails" placeholder="Jelaskan detail layanan ${serviceName} yang Anda butuhkan" rows="4" required></textarea>
        </div>
        <div class="form-group">
            <label for="contactInfo">Informasi Kontak:</label>
            <input type="text" id="contactInfo" name="contactInfo" placeholder="Nomor HP atau informasi kontak lainnya" required>
        </div>
    `;
    
    // Add promo code field
    addPromoCodeField();
}

// Add promo code field to the form
function addPromoCodeField() {
    const promoFormGroup = document.createElement('div');
    promoFormGroup.className = 'form-group';
    
    const promoLabel = document.createElement('label');
    promoLabel.textContent = 'Kode Promo (Opsional):';
    promoLabel.setAttribute('for', 'promoCode');
    
    const promoContainer = document.createElement('div');
    promoContainer.style.display = 'flex';
    promoContainer.style.gap = '10px';
    promoContainer.style.alignItems = 'center';
    
    const promoInput = document.createElement('input');
    promoInput.type = 'text';
    promoInput.name = 'promoCode';
    promoInput.id = 'promoCode';
    promoInput.placeholder = 'Masukkan kode promo';
    promoInput.style.flex = '1';
    promoInput.style.textTransform = 'uppercase';
    
    const applyButton = document.createElement('button');
    applyButton.type = 'button';
    applyButton.textContent = 'Terapkan';
    applyButton.className = 'promo-apply-btn';
    applyButton.style.padding = '8px 16px';
    applyButton.style.backgroundColor = 'var(--gradient-success)';
    applyButton.style.background = 'var(--gradient-success)';
    applyButton.style.color = 'white';
    applyButton.style.border = 'none';
    applyButton.style.borderRadius = '8px';
    applyButton.style.cursor = 'pointer';
    applyButton.style.fontWeight = '600';
    applyButton.style.fontSize = '0.9rem';
    applyButton.style.transition = 'all 0.3s ease';
    
    // Add promo status display
    const promoStatus = document.createElement('div');
    promoStatus.id = 'promoStatus';
    promoStatus.style.marginTop = '8px';
    promoStatus.style.fontSize = '0.9rem';
    promoStatus.style.fontWeight = '500';
    
    // Apply promo code event
    applyButton.addEventListener('click', function() {
        const promoCode = promoInput.value.trim().toUpperCase();
        applyPromoCode(promoCode, promoStatus);
    });
    
    // Allow Enter key to apply promo
    promoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const promoCode = promoInput.value.trim().toUpperCase();
            applyPromoCode(promoCode, promoStatus);
        }
    });
    
    promoContainer.appendChild(promoInput);
    promoContainer.appendChild(applyButton);
    
    promoFormGroup.appendChild(promoLabel);
    promoFormGroup.appendChild(promoContainer);
    promoFormGroup.appendChild(promoStatus);
    
    dynamicFormFields.appendChild(promoFormGroup);
}

// Check if promo code has been used before
function isPromoCodeUsed(code) {
    const usedCodes = JSON.parse(localStorage.getItem('usedPromoCodes') || '[]');
    return usedCodes.includes(code);
}

// Mark promo code as used
function markPromoCodeAsUsed(code) {
    const usedCodes = JSON.parse(localStorage.getItem('usedPromoCodes') || '[]');
    if (!usedCodes.includes(code)) {
        usedCodes.push(code);
        localStorage.setItem('usedPromoCodes', JSON.stringify(usedCodes));
    }
}

// Apply promo code function
function applyPromoCode(code, statusElement) {
    if (!code) {
        statusElement.textContent = '';
        statusElement.style.color = '';
        appliedPromoCode = null;
        return;
    }
    
    // Check if code exists in our promo codes database
    if (promoCodes[code]) {
        // Check if code has been used before
        if (isPromoCodeUsed(code)) {
            appliedPromoCode = null;
            statusElement.textContent = '✗ Maaf kode ini sudah dipakai';
            statusElement.style.color = 'var(--flash-sale-red)';
            
            // Show alert for already used promo code
            alert('Maaf kode ini sudah dipakai');
            return;
        }
        
        // Code is valid and not used yet
        appliedPromoCode = {
            code: code,
            ...promoCodes[code]
        };
        statusElement.textContent = `✓ Kode promo berhasil diterapkan: ${promoCodes[code].description}`;
        statusElement.style.color = 'var(--success-green)';
    } else {
        appliedPromoCode = null;
        statusElement.textContent = '✗ Kode yang Anda masukkan salah';
        statusElement.style.color = 'var(--flash-sale-red)';
        
        // Show alert for wrong promo code
        alert('Kode yang Anda masukkan salah');
    }
}

// Initialize modal functionality
function initializeModals() {
    // Close modal when clicking X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (orderModal) {
                orderModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    if (closePaymentModal) {
        closePaymentModal.addEventListener('click', function() {
            if (paymentModal) {
                paymentModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (orderModal && event.target === orderModal) {
            orderModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (paymentModal && event.target === paymentModal) {
            paymentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Handle order form submission
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processOrder();
        });
    }
}

// Calculate price based on selected options
function calculatePrice(serviceName, formData) {
    // Check if this is a flash sale product first
    if (flashSaleProducts[serviceName]) {
        return flashSaleProducts[serviceName].salePrice;
    }
    
    let price = 15000; // Default price for unknown services
    
    if (serviceData[serviceName]) {
        price = serviceData[serviceName].basePrice;
        
        // Check if service has pricing rules
        if (serviceData[serviceName].pricing) {
            const pricing = serviceData[serviceName].pricing;
            
            // Look for pricing based on form selections
            for (const fieldName in pricing) {
                const selectedValue = formData.get(fieldName);
                if (selectedValue && pricing[fieldName][selectedValue]) {
                    price = pricing[fieldName][selectedValue];
                    break; // Use the first matching price rule
                }
            }
        }
    }
    
    return price;
}

// Apply promo code discount to price
function applyPromoDiscount(originalPrice) {
    if (!appliedPromoCode) {
        return originalPrice;
    }
    
    let discountedPrice = originalPrice;
    
    if (appliedPromoCode.type === 'percentage') {
        const discountAmount = (originalPrice * appliedPromoCode.discount) / 100;
        discountedPrice = originalPrice - discountAmount;
    } else if (appliedPromoCode.type === 'fixed') {
        discountedPrice = originalPrice - appliedPromoCode.discount;
    }
    
    // Ensure price doesn't go below 0
    return Math.max(0, Math.round(discountedPrice));
}

// Process order and show payment modal
function processOrder() {
    const formData = new FormData(orderForm);
    const serviceName = modalTitle.textContent.replace('Pesan ', '');
    
    // Get selected payment method from form and store it globally
    selectedPaymentMethod = formData.get('paymentMethod');
    
    // Generate transaction number
    const transactionNum = 'NES' + Date.now().toString().slice(-8);
    
    // Calculate original price based on selections
    const originalPrice = calculatePrice(serviceName, formData);
    
    // Apply promo code discount
    const finalPrice = applyPromoDiscount(originalPrice);
    
    // Mark promo code as used if one was applied
    if (appliedPromoCode) {
        markPromoCodeAsUsed(appliedPromoCode.code);
    }
    
    // Create order summary with product details
    const orderSummary = createOrderSummary(serviceName, formData, originalPrice, finalPrice);
    
    // Update payment modal
    paymentAmount.textContent = `Rp ${finalPrice.toLocaleString('id-ID')}`;
    transactionNumber.textContent = `No. Transaksi: ${transactionNum}`;
    
    // Update order summary section
    updateOrderSummaryDisplay(orderSummary);
    
    // Close order modal and open payment modal
    orderModal.style.display = 'none';
    paymentModal.style.display = 'block';
    
    // Show payment method based on form selection
    showPaymentMethod(selectedPaymentMethod);
}

// Initialize payment methods
function initializePaymentMethods() {
    // Handle payment confirmation
    document.getElementById('confirmPayment').addEventListener('click', function() {
        handlePaymentConfirmation();
    });
    
    // Handle e-wallet selection
    document.querySelectorAll('.ewallet-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.ewallet-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Create order summary with product details
function createOrderSummary(serviceName, formData, originalPrice, finalPrice) {
    const summary = {
        serviceName: serviceName,
        originalPrice: originalPrice,
        finalPrice: finalPrice,
        promoCode: appliedPromoCode,
        details: []
    };
    
    // Extract form data based on service type
    if (serviceData[serviceName]) {
        serviceData[serviceName].fields.forEach(field => {
            const value = formData.get(field.name);
            if (value) {
                summary.details.push({
                    label: field.label,
                    value: value
                });
            }
        });
    } else {
        // For generic services
        const serviceDetails = formData.get('serviceDetails');
        const contactInfo = formData.get('contactInfo');
        if (serviceDetails) {
            summary.details.push({
                label: 'Detail Layanan',
                value: serviceDetails
            });
        }
        if (contactInfo) {
            summary.details.push({
                label: 'Informasi Kontak',
                value: contactInfo
            });
        }
    }
    
    // Add payment method
    const paymentMethod = formData.get('paymentMethod');
    if (paymentMethod) {
        let paymentText = '';
        switch(paymentMethod) {
            case 'qris': paymentText = 'QRIS'; break;
            case 'bank': paymentText = 'Transfer Bank'; break;
            case 'ewallet': paymentText = 'E-Wallet'; break;
            default: paymentText = paymentMethod;
        }
        summary.details.push({
            label: 'Metode Pembayaran',
            value: paymentText
        });
    }
    
    return summary;
}

// Update order summary display in payment modal
function updateOrderSummaryDisplay(orderSummary) {
    const orderSummaryElement = document.getElementById('orderSummary');
    
    let summaryHTML = '';
    
    // Show original price if promo code is applied
    if (orderSummary.promoCode && orderSummary.originalPrice !== orderSummary.finalPrice) {
        summaryHTML += `
            <p style="text-align: center; font-size: 16px; color: var(--text-muted); text-decoration: line-through;">
                Harga Asli: Rp ${orderSummary.originalPrice.toLocaleString('id-ID')}
            </p>
            <p style="text-align: center; font-size: 14px; color: var(--success-green); margin: 5px 0;">
                Kode Promo: ${orderSummary.promoCode.code} (${orderSummary.promoCode.description})
            </p>
        `;
    }
    
    summaryHTML += `
        <p class="payment-amount" id="paymentAmount">Rp ${orderSummary.finalPrice.toLocaleString('id-ID')}</p>
        <p class="transaction-number" id="transactionNumber">${transactionNumber.textContent}</p>
    `;
    
    orderSummaryElement.innerHTML = summaryHTML;
    
    // Re-assign the elements since we recreated them
    const newPaymentAmount = document.getElementById('paymentAmount');
    const newTransactionNumber = document.getElementById('transactionNumber');
    if (newPaymentAmount) paymentAmount = newPaymentAmount;
    if (newTransactionNumber) transactionNumber = newTransactionNumber;
}

// Show specific payment method
function showPaymentMethod(method) {
    // Hide all payment sections first
    const allPaymentSections = document.querySelectorAll('.payment-section');
    allPaymentSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected payment method
    switch(method) {
        case 'qris':
            if (qrisPayment) {
                qrisPayment.style.display = 'block';
            }
            break;
        case 'bank':
            if (bankPayment) {
                bankPayment.style.display = 'block';
            }
            break;
        case 'ewallet':
            if (ewalletPayment) {
                ewalletPayment.style.display = 'block';
            }
            break;
    }
}

// Handle payment confirmation
function handlePaymentConfirmation() {
    const transactionNum = transactionNumber.textContent;
    
    // Convert payment method to readable text
    let paymentMethodText = '';
    switch(selectedPaymentMethod) {
        case 'qris':
            paymentMethodText = 'QRIS';
            break;
        case 'bank':
            paymentMethodText = 'Transfer Bank';
            break;
        case 'ewallet':
            paymentMethodText = 'E-Wallet';
            break;
        default:
            paymentMethodText = 'QRIS';
    }
    
    // Create WhatsApp message
    let message = `Halo Admin NES MARKET!\n\n`;
    message += `Saya ingin mengkonfirmasi pembayaran:\n`;
    message += `${transactionNum}\n`;
    message += `Metode Pembayaran: ${paymentMethodText}\n`;
    message += `Jumlah: ${paymentAmount.textContent}\n`;
    
    // Add promo code info if applied
    if (appliedPromoCode) {
        message += `Kode Promo: ${appliedPromoCode.code}\n`;
    }
    
    message += `\nMohon diproses segera. Terima kasih!`;
    
    // Send to WhatsApp
    const whatsappUrl = `https://wa.me/6282111136720?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Close payment modal
    paymentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Show success message
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk konfirmasi pembayaran.');
}

// Initialize chat admin functionality
function initializeChatAdmin() {
    chatAdminBtn.addEventListener('click', function() {
        const message = `Halo Admin NES MARKET!\n\nSaya ingin bertanya tentang layanan yang tersedia. Mohon bantuannya.`;
        const whatsappUrl = `https://wa.me/6282111136720?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
}

// Initialize countdown timer
function initializeCountdown() {
    const countdownElement = document.getElementById('countdown');
    let targetDate;
    
    // Check if flash sale end time is already stored in localStorage
    const storedEndTime = localStorage.getItem('flashSaleEndTime');
    
    if (storedEndTime) {
        // Use existing end time
        targetDate = new Date(parseInt(storedEndTime));
        console.log('Flash Sale menggunakan waktu yang tersimpan');
    } else {
        // Generate new random flash sale duration between 2-5 hours
        const minHours = 2;
        const maxHours = 5;
        const randomHours = Math.random() * (maxHours - minHours) + minHours;
        
        // Set new flash sale end time
        targetDate = new Date();
        targetDate.setTime(targetDate.getTime() + (randomHours * 60 * 60 * 1000));
        
        // Store the end time in localStorage
        localStorage.setItem('flashSaleEndTime', targetDate.getTime().toString());
        
        console.log(`Flash Sale baru dimulai, akan berakhir dalam ${randomHours.toFixed(1)} jam`);
    }
    
    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            // Format with leading zeros
            const formattedHours = hours.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const formattedSeconds = seconds.toString().padStart(2, '0');
            
            countdownElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
            countdownElement.classList.remove('expired');
        } else {
            countdownElement.textContent = 'BERAKHIR';
            countdownElement.classList.add('expired');
            disableFlashSaleProducts();
            
            // Clear the stored end time when flash sale expires
            localStorage.removeItem('flashSaleEndTime');
        }
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Disable flash sale products when time ends
function disableFlashSaleProducts() {
    const flashSaleSection = document.querySelector('.flash-sale-section');
    const productCards = document.querySelectorAll('.flash-sale-section .product-card');
    
    if (flashSaleSection) {
        // Add expired class to flash sale section
        flashSaleSection.classList.add('flash-sale-expired');
        
        // Disable all product cards in flash sale
        productCards.forEach(card => {
            card.classList.add('product-expired');
            card.style.pointerEvents = 'none';
            card.style.opacity = '0.5';
            
            // Remove click event listeners
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
            
            // Add expired overlay
            const expiredOverlay = document.createElement('div');
            expiredOverlay.className = 'expired-overlay';
            expiredOverlay.innerHTML = '<span>BERAKHIR</span>';
            newCard.appendChild(expiredOverlay);
        });
    }
}

// Add click handlers for flash sale products
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('p').textContent;
            openOrderModal(productName);
        });
        
        // Add hover effect
        card.style.cursor = 'pointer';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add click handlers for banner buttons
document.addEventListener('DOMContentLoaded', function() {
    const bannerButtons = document.querySelectorAll('.promo-banner button');
    
    bannerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const message = `Halo Admin NES MARKET!\n\nSaya ingin bergabung ke saluran WhatsApp untuk mendapatkan informasi terbaru.`;
            const whatsappUrl = `https://wa.me/6282111136720?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
    
    // Main promo button
    const promoButton = document.querySelector('.promo-button');
    if (promoButton) {
        promoButton.addEventListener('click', function() {
            const message = `Halo Admin NES MARKET!\n\nSaya tertarik dengan promo yang sedang berlangsung. Bisa info lebih lanjut?`;
            const whatsappUrl = `https://wa.me/6282111136720?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});