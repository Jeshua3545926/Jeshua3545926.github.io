// CodeTranslate Pro - Interactive Features
class CodeTranslatePro {
    private mobileMenuOpen = false;

    constructor() {
        this.init();
    }

    private init(): void {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupAnimations();
        this.setupCTAButtons();
        this.setupNavbarScroll();
    }

    private setupMobileMenu(): void {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.nav-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                this.mobileMenuOpen = !this.mobileMenuOpen;
                menu.classList.toggle('active', this.mobileMenuOpen);
                toggle.innerHTML = this.mobileMenuOpen 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
        }
    }

    private setupSmoothScrolling(): void {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href && href !== '#') {
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = (target as HTMLElement).offsetTop - 70;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    private setupAnimations(): void {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.feature-card, .pricing-card, .demo-text, .demo-video'
        );
        
        animateElements.forEach(el => observer.observe(el));

        // Add CSS for animations
        this.addAnimationStyles();
    }

    private addAnimationStyles(): void {
        const style = document.createElement('style');
        style.textContent = `
            .feature-card,
            .pricing-card,
            .demo-text,
            .demo-video {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            @media (max-width: 768px) {
                .nav-menu {
                    position: fixed;
                    top: 70px;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 2rem;
                    box-shadow: var(--shadow-lg);
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }
                
                .nav-menu.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
            }
        `;
        document.head.appendChild(style);
    }

    private setupCTAButtons(): void {
        const ctaButtons = document.querySelectorAll('.btn-primary, .nav-cta');
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.showInstallModal();
            });
        });

        // Demo button
        const demoButtons = document.querySelectorAll('.btn-secondary, .video-placeholder');
        demoButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.showDemoModal();
            });
        });
    }

    private setupNavbarScroll(): void {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
        });

        // Add scrolled navbar styles
        const style = document.createElement('style');
        style.textContent = `
            .navbar.scrolled {
                background: rgba(255, 255, 255, 0.98);
                box-shadow: var(--shadow-md);
            }
        `;
        document.head.appendChild(style);
    }

    private showInstallModal(): void {
        const modal = this.createModal(
            'Instalar CodeTranslate Pro',
            `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🚀</div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-primary);">¡Próximamente!</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">
                        CodeTranslate Pro estará disponible pronto en el VS Code Marketplace.
                        Suscríbete para ser el primero en saberlo.
                    </p>
                    <div style="display: flex; gap: 1rem; justify-content: center;">
                        <input type="email" placeholder="tu@email.com" 
                               style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 8px; flex: 1; max-width: 250px;">
                        <button class="btn-primary" onclick="this.closest('.modal').remove(); alert('¡Gracias! Te notificaremos cuando esté listo.');">
                            Notificarme
                        </button>
                    </div>
                </div>
            `
        );
        document.body.appendChild(modal);
    }

    private showDemoModal(): void {
        const modal = this.createModal(
            'Demo Interactivo',
            `
                <div style="padding: 2rem;">
                    <div style="background: var(--bg-dark); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
                        <div style="color: #e5e7eb; font-family: monospace; line-height: 1.6;">
                            <div style="color: #6b7280;">// Selecciona este texto y presiona Ctrl+Shift+T</div>
                            <div style="background: rgba(37, 99, 235, 0.2); padding: 0.5rem; margin: 0.5rem 0; border-left: 3px solid var(--primary-color);">
                                function calculateArea(radius) {
                            </div>
                            <div style="margin-left: 2rem;">return Math.PI * radius * radius;</div>
                            <div>}</div>
                        </div>
                    </div>
                    <div style="text-align: center;">
                        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                            Esta es una simulación de cómo funcionará la extensión en VS Code
                        </p>
                        <button class="btn-primary" onclick="this.closest('.modal').remove();">
                            Entendido
                        </button>
                    </div>
                </div>
            `
        );
        document.body.appendChild(modal);
    }

    private createModal(title: string, content: string): HTMLElement {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
            }
            
            .modal-content {
                background: white;
                border-radius: 16px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                box-shadow: var(--shadow-xl);
                animation: slideUp 0.3s ease;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid var(--border-color);
            }
            
            .modal-header h2 {
                margin: 0;
                color: var(--text-primary);
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--text-secondary);
                padding: 0.5rem;
                border-radius: 8px;
                transition: all 0.3s ease;
            }
            
            .modal-close:hover {
                background: var(--bg-secondary);
                color: var(--text-primary);
            }
            
            .modal-body {
                padding: 0;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from { 
                    opacity: 0;
                    transform: translateY(30px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

        return modal;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CodeTranslatePro();
});

// Add some fun easter eggs
document.addEventListener('keydown', (e) => {
    // Konami code: ↑↑↓↓←→←→BA
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    if (!(window as any).konamiSequence) (window as any).konamiSequence = [];
    (window as any).konamiSequence.push(e.code);
    
    if ((window as any).konamiSequence.length > konamiCode.length) {
        (window as any).konamiSequence = (window as any).konamiSequence.slice(-konamiCode.length);
    }
    
    if ((window as any).konamiSequence.join(',') === konamiCode.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        console.log('🌈 ¡Easter egg activado! ¡Eres increíble!');
    }
});

export {};