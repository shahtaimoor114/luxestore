
        const allProducts = [
            { id: 1, name: 'Rolex Classic', price: 499, category: 'watches', image: '../luxe pics/lunar_Green-Leather_1.webp' },
            { id: 2, name: 'Omega Steel', price: 399, category: 'watches', image: '../luxe pics/00_0000_2a141f2e-11ac-45d1-b0bc-7d49ec70d84e.webp' },
            { id: 3, name: 'blue and gold addition', price: 359, category: 'watches', image: '../luxe pics/blue.webp' },
            { id: 4, name: 'Fossil Addition', price: 249, category: 'watches', image: '../luxe pics/Jewel_1_52087a86-eb4c-4a1e-bb22-0f36c1ab00b1.webp' },
            { id: 5, name: 'leather and Waterproof', price: 299, category: 'watches', image: '../luxe pics/New-Website-Smartwatch-Category-Banner_04.webp' },
            { id: 6, name: 'Lunar Silicon', price: 599, category: 'watches', image: '../luxe pics/lunar_Silver-Sillicon_1.webp' },
            { id: 7, name: 'AirPods Pro', price: 249, category: 'airpods', image: '../luxe air pods/1.webp' },
            { id: 8, name: 'AirPods 3', price: 179, category: 'airpods', image: '../luxe air pods/2.webp' },
            { id: 9, name: 'AirPods Max', price: 549, category: 'airpods', image: '../luxe air pods/3.webp' },
            { id: 10, name: 'Beats Studio', price: 149, category: 'airpods', image: '../luxe air pods/4.webp' },
            { id: 11, name: 'Beats Fit', price: 199, category: 'airpods', image: '../luxe air pods/5.webp' },
            { id: 12, name: 'Gaming Earbuds', price: 79, category: 'airpods', image: '../luxe air pods/6.webp' },
            { id: 13, name: 'Retro Boombox', price: 129, category: 'speakers', image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNwZWFrZXJzfGVufDB8fDB8fHww' },
            { id: 14, name: 'Smart Home Sound', price: 249, category: 'speakers', image: 'https://images.unsplash.com/photo-1700563133041-3d6e64235082?q=80&w=429&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id: 15, name: 'Portable Bass', price: 89, category: 'speakers', image: 'https://media.istockphoto.com/id/1199491721/photo/portable-bluetooth-navy-blue-speaker-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=tkLqbEhHLIOv5KYS5f7lFvsBSx6oqnZ_Xu4383xHHKw=' },
            { id: 16, name: 'Studio Monitor', price: 350, category: 'speakers', image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=600' },
            { id: 17, name: 'Wooden Classic', price: 199, category: 'speakers', image: 'https://images.unsplash.com/photo-1582978571763-2d039e56f0c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id: 18, name: 'Cinema Soundbar', price: 399, category: 'speakers', image: 'https://images.unsplash.com/photo-1548617335-c1b176388c65?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id: 19, name: 'gold eddition', price: 499, category: 'skincare', image: 'https://plus.unsplash.com/premium_photo-1679864782376-bdbbb87d9027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8' },
            { id: 20, name: 'mate black beast', price: 89, category: 'skincare', image: 'https://plus.unsplash.com/premium_photo-1679913891276-ac874f22773f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' },
            { id: 21, name: 'Gaming beast in black', price: 65, category: 'skincare', image: 'https://plus.unsplash.com/premium_photo-1760531786410-85520eb77ad3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D' },
            { id: 22, name: 'leather addition', price: 75, category: 'skincare', image: 'https://plus.unsplash.com/premium_photo-1680346528789-0ffcc13f5ebf?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id: 23, name: 'Luxe best ', price: 95, category: 'skincare', image: 'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id: 24, name: 'Beauty in best performance', price: 299, category: 'skincare', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D' },
              { id: 24, name: ' Pink Beauty ', price: 299, category: 'skincare', image: 'https://plus.unsplash.com/premium_photo-1679913793289-d1ba3b9b0187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8' },
              { id: 24, name: 'Baby blue', price: 299, category: 'skincare', image: 'https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        ];

        // ================= CART SYSTEM =================
        let cart = [];

        function addToCart(name, price, image) {
            const existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }
            
            updateCartUI();
            openCart();
            showNotification(`${name} added to cart!`);
        }

        function removeFromCart(name) {
            cart = cart.filter(item => item.name !== name);
            updateCartUI();
        }

        function updateQuantity(name, change) {
            const item = cart.find(item => item.name === name);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(name);
                } else {
                    updateCartUI();
                }
            }
        }

        function updateCartUI() {
            const cartItems = document.getElementById('cartItems');
            const cartCount = document.getElementById('cartCount');
            const cartTotal = document.getElementById('cartTotal');
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            cartCount.textContent = totalItems;
            cartTotal.textContent = `$${totalPrice.toLocaleString()}`;
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-bag"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>$${item.price}</p>
                            <div class="cart-item-qty">
                                <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                            </div>
                        </div>
                        <i class="fas fa-trash cart-item-remove" onclick="removeFromCart('${item.name}')"></i>
                    </div>
                `).join('');
            }
        }

        function openCart() {
            document.getElementById('cartSidebar').classList.add('active');
            document.getElementById('overlayBg').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeCart() {
            document.getElementById('cartSidebar').classList.remove('active');
            document.getElementById('overlayBg').classList.remove('active');
            document.body.style.overflow = '';
        }

        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Thank you for your order! Proceeding to checkout...');
            cart = [];
            updateCartUI();
            closeCart();
        }

        // ================= SEARCH SYSTEM =================
        function openSearch() {
            document.getElementById('searchModal').classList.add('active');
            document.getElementById('searchInput').focus();
            document.body.style.overflow = 'hidden';
        }

        function closeSearch() {
            document.getElementById('searchModal').classList.remove('active');
            document.getElementById('searchInput').value = '';
            document.getElementById('searchResults').innerHTML = '';
            document.body.style.overflow = '';
        }

        function searchProducts() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const results = document.getElementById('searchResults');
            
            if (query.length < 2) {
                results.innerHTML = '';
                return;
            }
            
            const filtered = allProducts.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query)
            );
            
            if (filtered.length === 0) {
                results.innerHTML = '<p style="color: #888; text-align: center; padding: 20px;">No products found</p>';
            } else {
                results.innerHTML = filtered.map(p => `
                    <div class="search-result-item" onclick="addToCart('${p.name}', ${p.price}, '${p.image}'); closeSearch();">
                        <img src="${p.image}" alt="${p.name}">
                        <div class="search-result-info">
                            <h4>${p.name}</h4>
                            <span>$${p.price}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        // ================= SHOP MODAL =================
        function openShopModal(category = 'all') {
            document.getElementById('shopModal').classList.add('active');
            document.body.style.overflow = 'hidden';
            filterShopProducts(category);
            
            document.querySelectorAll('.shop-cat-btn').forEach(btn => btn.classList.remove('active'));
            if(event && event.target) {
                event.target.classList.add('active');
            } else {
                document.querySelector('.shop-cat-btn').classList.add('active');
            }
        }

        function closeShopModal() {
            document.getElementById('shopModal').classList.remove('active');
            document.body.style.overflow = '';
        }

        function filterShopProducts(category) {
            const grid = document.getElementById('shopProductsGrid');
            let filtered = category === 'all' ? allProducts : allProducts.filter(p => p.category === category);
            
            grid.innerHTML = filtered.map(p => `
                <div class="shop-product-card">
                    <img src="${p.image}" alt="${p.name}">
                    <div class="shop-product-info">
                        <h4>${p.name}</h4>
                        <p class="price">$${p.price}</p>
                        <button class="add-to-cart-btn" onclick="addToCart('${p.name}', ${p.price}, '${p.image}')">Add to Cart</button>
                    </div>
                </div>
            `).join('');
            
            document.querySelectorAll('.shop-cat-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent.includes('All'))) {
                    btn.classList.add('active');
                }
            });
        }

        // ================= CONTACT MODAL =================
        function openContactModal() {
            document.getElementById('contactModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeContactModal() {
            document.getElementById('contactModal').classList.remove('active');
            document.body.style.overflow = '';
        }

        function submitContact(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            e.target.reset();
        }

        // ================= AUTH MODAL =================
        function openAuthModal() {
            document.getElementById('authModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeAuthModal() {
            document.getElementById('authModal').classList.remove('active');
            document.body.style.overflow = '';
        }

        function switchAuthTab(tab) {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            
            if (tab === 'login') {
                document.querySelector('.auth-tab:first-child').classList.add('active');
                document.getElementById('loginForm').classList.add('active');
            } else {
                document.querySelector('.auth-tab:last-child').classList.add('active');
                document.getElementById('registerForm').classList.add('active');
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            alert('Login successful! Welcome back.');
            closeAuthModal();
        }

        function handleRegister(e) {
            e.preventDefault();
            alert('Account created successfully! Welcome to LUXE.');
            closeAuthModal();
        }

        // ==== NAVIGATION ====
        function goHome() {
            closeShopModal();
            closeContactModal();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ==== NOTIFICATION ======
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                bottom: 100px;
                right: 30px;
                background: #1a1a1a;
                color: #fff;
                padding: 15px 25px;
                border-radius: 8px;
                z-index: 10000;
                animation: slideIn 0.3s ease;
                box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                max-width: 300px;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // ================= LOADER =================
        window.onload = () => {
            setTimeout(() => {
                document.getElementById("loader").style.opacity = "0";
                setTimeout(() => { 
                    document.getElementById("loader").style.display = "none"; 
                }, 500);
            }, 1500);
        };

        // ================= NAV TOGGLE =================
        const navToggle = document.getElementById("navToggle");
        const artNav = document.getElementById("artNav");
        let navOpen = false;

        navToggle.addEventListener("click", () => {
            artNav.classList.toggle('active');
            navOpen = !navOpen;
        });

        function closeMenu() {
            artNav.classList.remove('active');
            navOpen = false;
        }

        // ================= HERO SLIDER =================
        const slides = document.querySelectorAll(".slide");
        const dotsContainer = document.querySelector(".dots");
        const title = document.querySelector(".title");
        const year = document.querySelector(".year");
        let current = 0;

        slides.forEach((_, i) => {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if(i === 0) dot.classList.add("active");
            dot.onclick = () => showSlide(i);
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll(".dot");

        function showSlide(index) {
            slides.forEach(s => s.classList.remove("active"));
            dots.forEach(d => d.classList.remove("active"));
            slides[index].classList.add("active");
            dots[index].classList.add("active");
            title.textContent = slides[index].dataset.title;
            year.textContent = slides[index].dataset.year;
            current = index;
        }

        // Initialize first slide content
        showSlide(0);

        function autoSlide() {
            current = (current + 1) % slides.length;
            showSlide(current);
        }
        setInterval(autoSlide, 5000);

        // ================= SLIDER SCROLL =================
        function scrollSlider(sliderId, direction) {
            const slider = document.getElementById(sliderId);
            if (slider) {
                const scrollAmount = 300;
                slider.scrollBy({
                    left: direction * scrollAmount,
                    behavior: "smooth"
                });
            }
        }

        // ================= SCROLL ANIMATIONS =================
        const scrollSection = document.getElementById("scrollSection");
        const miniSlides = document.querySelectorAll(".mini-slide");
        let miniIndex = 0;

        window.addEventListener("scroll", () => {
            // Scroll Layout Animation
            if (scrollSection) {
                const triggerPoint = scrollSection.offsetTop - window.innerHeight + 200;
                if (window.scrollY > triggerPoint) {
                    scrollSection.classList.add("show");
                }
            }

            // Mini Slider
            const miniSliderTrigger = scrollSection ? scrollSection.offsetTop - window.innerHeight + 200 : 0;
            const scrollPercent = (window.scrollY - miniSliderTrigger) / 500;
            if (scrollPercent >= 0 && scrollPercent < 1) {
                let newIndex = Math.floor(scrollPercent * miniSlides.length);
                if (newIndex !== miniIndex && newIndex < miniSlides.length) {
                    miniSlides[miniIndex].classList.remove("active");
                    miniIndex = newIndex;
                    miniSlides[miniIndex].classList.add("active");
                }
            }

            // Speaker Text Animation
            const speakerText = document.getElementById("speakerText");
            if (speakerText) {
                const speakerTrigger = speakerText.getBoundingClientRect().top - window.innerHeight + 150;
                if (speakerTrigger < 0) {
                    speakerText.classList.add("active");
                }
            }
        });

        // ================= OVERLAY CLICK =================
        document.getElementById('overlayBg').addEventListener('click', () => {
            closeCart();
            closeMenu();
        });

        // ================= KEYBOARD SHORTCUTS =================
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeSearch();
                closeCart();
                closeAuthModal();
                closeShopModal();
                closeContactModal();
                closeMenu();
            }
        });




                // ================= PAGE MODAL SYSTEM (FOOTER LINKS) =================

        const pageData = {
            story: {
                title: "",
                subtitle: "The Art of Luxury",
                image: "bg contact.jpg", // Luxury store interior
                content: `
                    <div class="content-block">
                        <h2>How It Began</h2>
                        <p>LUXE was born from a simple idea: technology and accessories should be more than just functional—they should be masterpieces. Founded in 2018, we set out to curate a collection that blends the precision of modern tech with the timeless elegance of luxury design.</p>
                        <p>Based in New York, our team travels the globe to source the finest materials and the most innovative designs. From the smooth leather of our watch straps to the acoustic perfection of our speakers, every item in our store is chosen for those who appreciate the finer things in life.</p>
                    </div>
                    <div class="content-block">
                        <h2>Our Philosophy</h2>
                        <p>We believe that luxury is not just about price tags; it's about the experience. It's the weight of a gold watch on your wrist, the clarity of sound in your ears, and the confidence that comes from owning something truly exceptional. We are not just a store; we are a gallery of modern excellence.</p>
                    </div>
                `
            },
            careers: {
                title: "Careers",
                subtitle: "Join the Journey",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000", // Modern office
                content: `
                    <div class="content-block">
                        <h2>Work With Us</h2>
                        <p>We are always looking for passionate individuals who share our vision for elegance and quality. At LUXE, you will find a culture that values creativity, precision, and the pursuit of perfection.</p>
                    </div>
                    <div class="content-block">
                        <h2>Open Positions</h2>
                        <ul>
                            <li><strong>Product Curator</strong> <span>Remote / Full-time</span></li>
                            <li><strong>UX Designer</strong> <span>New York / Hybrid</span></li>
                            <li><strong>Customer Experience Lead</strong> <span>New York / On-site</span></li>
                            <li><strong>Marketing Manager</strong> <span>Remote / Full-time</span></li>
                        </ul>
                        <p style="margin-top: 20px;">To apply, send your resume and cover letter to <strong>careers@luxe.com</strong>.</p>
                    </div>
                `
            },
            press: {
                title: "Press",
                subtitle: "In The Spotlight",
                image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000", // Magazines
                content: `
                    <div class="content-block">
                        <h2>Media & News</h2>
                        <p>LUXE has been featured in top publications worldwide for our innovative approach to luxury tech accessories. We welcome press inquiries and collaboration opportunities.</p>
                    </div>
                    <div class="content-block">
                        <h2>Featured In</h2>
                        <ul>
                            <li><strong>Vogue</strong> <span>"The Future of Tech Elegance"</span></li>
                            <li><strong>GQ Magazine</strong> <span>"Top 10 Watches of the Year"</span></li>
                            <li><strong>TechCrunch</strong> <span>"Redefining Audio Gear"</span></li>
                        </ul>
                    </div>
                    <div class="content-block">
                        <h2>Contact Press</h2>
                        <p>For media inquiries, please contact:<br><strong>press@luxe.com</strong></p>
                    </div>
                `
            },
            privacy: {
                title: "Privacy Policy",
                subtitle: "Your Data, Secured",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000", // Lock/Security abstract
                content: `
                    <div class="content-block">
                        <h2>Our Commitment to Privacy</h2>
                        <p>At LUXE, we value the trust you place in us. This policy outlines how we collect, use, and protect your personal information.</p>
                    </div>
                    <div class="content-block">
                        <h2>Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, postal address, and payment information.</p>
                    </div>
                    <div class="content-block">
                        <h2>Data Security</h2>
                        <p>We implement industry-standard security measures to protect your data. All transactions are encrypted using SSL technology, and we do not sell your personal data to third parties.</p>
                    </div>
                `
            },
            terms: {
                title: "Terms of Service",
                subtitle: "Terms & Conditions",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000", // Legal documents
                content: `
                    <div class="content-block">
                        <h2>Agreement to Terms</h2>
                        <p>By accessing or using the LUXE website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </div>
                    <div class="content-block">
                        <h2>Use of Service</h2>
                        <p>You may use our site for lawful purposes only. You agree not to use the site to distribute malware, attempt to breach security, or interfere with the operation of the site.</p>
                    </div>
                    <div class="content-block">
                        <h2>Intellectual Property</h2>
                        <p>All content on this website, including text, graphics, logos, and images, is the property of LUXE or its content suppliers and is protected by international copyright laws.</p>
                    </div>
                    <div class="content-block">
                        <h2>Limitation of Liability</h2>
                        <p>LUXE shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
                    </div>
                `
            }
        };

        function openPageModal(pageId) {
            const modal = document.getElementById('pageModal');
            const data = pageData[pageId];
            
            if (data) {
                document.getElementById('pageHeroImage').src = data.image;
                document.getElementById('pageHeroTitle').textContent = data.title;
                document.getElementById('pageHeroSubtitle').textContent = data.subtitle;
                document.getElementById('pageContentBody').innerHTML = data.content;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Scroll modal to top when opening
                modal.scrollTop = 0;
            }
        }

        function closePageModal() {
            document.getElementById('pageModal').classList.remove('active');
            document.body.style.overflow = '';
        }

        // ================= UPDATED FOOTER LINK HANDLERS =================
        // You need to update your existing footer HTML <a> tags to use these functions:
        /* 
           Example for HTML footer:
           <li><a href="#" onclick="openPageModal('story')">Our Story</a></li>
           <li><a href="#" onclick="openPageModal('careers')">Careers</a></li>
           <li><a href="#" onclick="openPageModal('press')">Press</a></li>
           <li><a href="#" onclick="openPageModal('privacy')">Privacy Policy</a></li>
           <li><a href="#" onclick="openPageModal('terms')">Terms of Service</a></li>
        */

        // We will attach these listeners automatically so you don't have to change HTML manually if you don't want to:
        document.addEventListener('DOMContentLoaded', () => {
            // Mapping IDs to functions (Assuming you can add IDs to your footer links or we target by text)
            // Since I cannot change your HTML logic in the provided block, I will provide the updated Footer HTML block below.
        });