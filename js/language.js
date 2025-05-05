document.addEventListener('DOMContentLoaded', function() {
    // Language data
    const languages = {
        en: {
            siteTitle: "My Portfolio",
            logo: 'Portfolio',
            nav: ['Home', 'Profile', 'Experience', 'Projects', 'Certificates', 'Contact'],
            hero: {
                downloadCV: 'My CV',
                contactMe: 'Contact Me',
                cvPath: '/Documents/CV Muhamad Dzakwan Ar Efendi - English (Cyber).pdf'  // English CV path
            },
            profile: {
                title: 'About Me',
                greeting: 'Hi, I\'m Muhamad Dzakwan Ar Efendi',
                description: 'I am an 18-year-old graduate of Wikrama Bogor Vocational High School in 2025, majoring in Computer Network Engineering and Telecommunications. I have completed an internship for six months at PT Maxindo Mitra Solusi as a Technical Support, where I was responsible for needs assessment, installation, troubleshooting, and network maintenance. I am passionate about building a career in cyber security and system administration.',
                location: 'Location',
                email: 'Email'
            },
            experience: {
                title: 'Work Experience',
                description: 'My professional journey and career highlights',
                present: 'Present',
                achievements: [
                    // IT Infrastructure Consultant
                    [
                        'Designed network topology from scratch based on the client\'s operational requirements.',
                        'Analyzed existing network devices to evaluate their effectiveness and efficiency.',
                        'Conducted research and recommended new network equipment (such as switches, routers, and access points) that met the client\'s technical specifications and budget.',
                        'Communicated directly with the client to ensure the proposed network solution aligned with their needs and expectations.'
                    ],
                    // Technical Support Staff
                    [
                        'Conducted site surveys to assess client network requirements and infrastructure conditions.',
                        'Installed and configured network devices such as routers, switches, and access points.',
                        'Performed troubleshooting on network issues, ensuring minimal downtime and service disruption.',
                        'Provided routine maintenance and monitoring of network systems to maintain optimal performance.',
                        'Documented technical issues and solutions to support knowledge sharing and future problem-solving.',
                        'Assisted senior engineers in planning and deploying network infrastructure based on client specifications.',
                        'Communicated with clients to explain technical problems and provide clear resolutions.'
                    ]
                ]
            },
            projects: {
                title: 'My Projects',
                description: 'A showcase of my recent work, personal projects, and contributions',
                project: 'Project',
                descriptions: [
                    'Implemented Snort IDS, ARP Poisoning (MITM), DMZ, USB mounting restrictions, password hardening, IPtables configuration, and Nmap scanning for network defense testing.',
                    'Configured MikroTik and Cisco devices in PNETLab, including basic MikroTik setup and DMZ implementation to a secondary router.',
                    'Configured a MikroTik router to integrate with AWS by assigning static DNS for AWS server IPs, and setting up hotspot, DHCP, and VLAN.',
                    'Set up a small office network using two MikroTik routers with static routing, load balancing, OSPF, queue management, firewall, and hotspot.',
                    'Implemented PPPoE and hotspot on MikroTik routers, and performed FO cable installation with OLT and ONT configuration.',
                    'Built scalable infrastructure using ELB, Auto Scaling, RDS, Zabbix and Nagios for monitoring, and configured VPC and EC2 instances.',
                    'Deployed a Linux server with LEMP stack, WordPress, SSH key authentication, mail server with webmail, virtual hosts, VoIP service, and additional services including Apache2, Nginx, HTTPS, Samba, IPtables NAT gateway, FTP, DNS, and DHCP.',
                    'Simulated a network in Cisco Packet Tracer with configuration of routing between two routers, VLAN, server DHCP on router, server DNS, and server web.'
                ]
            },
            certificates: {
                title: 'Certificates',
                description: 'Professional certifications and achievements I\'ve earned throughout my career',
                descriptions: [
                    'Certified in basic MikroTik network configuration, including routing, wireless, firewall, and network troubleshooting.',
                    'Knowledge of networking fundamentals, how devices communicate, cabling, network addressing and services, troubleshooting and support of endpoints, networks, and users including diagnostics and documentation as a member of a help desk team, and basic wireless.',
                    'understanding of network monitoring and protection techniques, including the use of firewalls, cloud security, and cryptography, as well as familiarity with handling security alerts and implementing security governance.',
                    'understanding Linux configurations, including use of DNS and DHCP server, MariaDB',
                    'Foundational understanding of Networking such as IPV4, TCP/IP, and OSI Model.',
                    'Certified in foundational networking concepts, including IP addressing, network protocols, and basic router/switch configuration.',
                    'Trained in network simulation using PNETLab, focusing on network design, configuration, and troubleshooting in a virtual environment',
                    'Mempelajari ethical hacking, eksploitasi aplikasi dan jaringan, keamanan IoT, penetration testing, dan penilaian kerentanan dan pemindaian.',
                    'Mempelajari peluang dan tantangan AI, komputasi kuantum, dan kriptografi.',
                    'Mengenal berbagai jenis virus dan aplikasi berbahaya, termasuk bentuk dan metode serangannya.',
                    'Berpartisipasi dalam Olimpiade Jaringan MikroTik, mendemonstrasikan keterampilan dalam konfigurasi jaringan menggunakan MikroTik RouterOS.',
                    'Menyelesaikan kursus dasar Cisco, mencakup dasar-dasar jaringan, pengalamatan IP, dan router/switch pengantar.',
                    'Menyelesaikan kursus dasar Cisco, mencakup dasar-dasar jaringan, pengalamatan IP, dan router/switch pengantar.'
                ]
            },
            contact: {
                title: 'Get In Touch',
                description: 'Have a project in mind or want to collaborate? Feel free to reach out!',
                contactMe: 'Contact Me'
            },
            footer: {
                rights: 'All rights reserved.'
            }
        },
        id: {
            siteTitle: "Portofolio Saya",
            logo: 'Portofolio',
            nav: ['Beranda', 'Profil', 'Pengalaman', 'Proyek', 'Sertifikat', 'Kontak'],
            hero: {
                downloadCV: 'CV Saya',
                contactMe: 'Hubungi Saya',
                cvPath: '/Documents/CV Muhamad Dzakwan Ar Efendi - Indonesia (Cyber).pdf'  // Indonesian CV path
            },
            profile: {
                title: 'Tentang Saya',
                greeting: 'Hai, Saya Muhamad Dzakwan Ar Efendi',
                description: 'Saya adalah lulusan SMK Wikrama Bogor tahun 2025 berusia 18 tahun, jurusan Teknik Komputer Jaringan dan Telekomunikasi. Saya telah menyelesaikan magang selama enam bulan di PT Maxindo Mitra Solusi sebagai Technical Support, di mana saya bertanggung jawab untuk penilaian kebutuhan, instalasi, troubleshooting, dan pemeliharaan jaringan. Saya bersemangat untuk membangun karir di bidang cyber security dan administrasi sistem.',
                location: 'Lokasi',
                email: 'Email'
            },
            experience: {
                title: 'Pengalaman Kerja',
                description: 'Perjalanan profesional dan pencapaian karir saya',
                present: 'Sekarang',
                achievements: [
                    // IT Infrastructure Consultant
                    [
                        'Merancang topologi jaringan dari awal berdasarkan kebutuhan operasional klien.',
                        'Menganalisis perangkat jaringan yang ada untuk mengevaluasi efektivitas dan efisiensinya.',
                        'Melakukan riset dan merekomendasikan peralatan jaringan baru (seperti switch, router, dan access point) yang memenuhi spesifikasi teknis dan anggaran klien.',
                        'Berkomunikasi langsung dengan klien untuk memastikan solusi jaringan yang diusulkan sesuai dengan kebutuhan dan harapan mereka.'
                    ],
                    // Technical Support Staff
                    [
                        'Melakukan survei lokasi untuk menilai kebutuhan jaringan klien dan kondisi infrastruktur.',
                        'Menginstal dan mengkonfigurasi perangkat jaringan seperti router, switch, dan access point.',
                        'Melakukan troubleshooting pada masalah jaringan, memastikan downtime dan gangguan layanan minimal.',
                        'Menyediakan pemeliharaan rutin dan pemantauan sistem jaringan untuk menjaga kinerja optimal.',
                        'Mendokumentasikan masalah teknis dan solusinya untuk mendukung berbagi pengetahuan dan pemecahan masalah di masa depan.',
                        'Membantu insinyur senior dalam merencanakan dan menerapkan infrastruktur jaringan berdasarkan spesifikasi klien.',
                        'Berkomunikasi dengan klien untuk menjelaskan masalah teknis dan memberikan solusi yang jelas.'
                    ]
                ]
            },
            projects: {
                title: 'Proyek Saya',
                description: 'Tampilan karya terbaru, proyek pribadi, dan kontribusi saya',
                project: 'Proyek',
                descriptions: [
                    'Mengimplementasikan Snort IDS, ARP Poisoning (MITM), DMZ, pembatasan pemasangan USB, penguatan kata sandi, konfigurasi IPtables, dan pemindaian Nmap untuk pengujian pertahanan jaringan.',
                    'Mengkonfigurasi perangkat MikroTik dan Cisco di PNETLab, termasuk pengaturan dasar MikroTik dan implementasi DMZ ke router sekunder.',
                    'Mengkonfigurasi router MikroTik untuk terintegrasi dengan AWS dengan menetapkan DNS statis untuk IP server AWS, dan mengatur hotspot, DHCP, dan VLAN.',
                    'Menyiapkan jaringan kantor kecil menggunakan dua router MikroTik dengan static routing, load balancing, OSPF, manajemen antrian, firewall, dan hotspot.',
                    'Mengimplementasikan PPPoE dan hotspot pada router MikroTik, dan melakukan instalasi kabel FO dengan konfigurasi OLT dan ONT.',
                    'Membangun infrastruktur yang dapat diskalakan menggunakan ELB, Auto Scaling, RDS, Zabbix dan Nagios untuk pemantauan, dan mengkonfigurasi VPC dan instans EC2.',
                    'Menerapkan server Linux dengan LEMP stack, WordPress, autentikasi kunci SSH, mail server dengan webmail, virtual host, layanan VoIP, dan layanan tambahan termasuk Apache2, Nginx, HTTPS, Samba, gateway NAT IPtables, FTP, DNS, dan DHCP.',
                    'Mensimulasikan jaringan di Cisco Packet Tracer dengan konfigurasi routing antara dua router, VLAN, server DHCP pada router, server DNS, dan server web.'
                ]
            },
            certificates: {
                title: 'Sertifikat',
                description: 'Sertifikasi profesional dan pencapaian yang telah saya peroleh sepanjang karir saya',
                descriptions: [
                    'Tersertifikasi dalam konfigurasi jaringan MikroTik dasar, termasuk routing, wireless, firewall, dan troubleshooting jaringan.',
                    'Pengetahuan tentang dasar-dasar jaringan, bagaimana perangkat berkomunikasi, pengkabelan, pengalamatan jaringan dan layanan, troubleshooting dan dukungan endpoint, jaringan, dan pengguna termasuk diagnostik dan dokumentasi sebagai anggota tim help desk, dan wireless dasar.',
                    'Pemahaman tentang teknik pemantauan dan perlindungan jaringan, termasuk penggunaan firewall, keamanan cloud, dan kriptografi, serta keakraban dengan penanganan peringatan keamanan dan implementasi tata kelola keamanan.',
                    'Pemahaman konfigurasi Linux, termasuk penggunaan server DNS dan DHCP, MariaDB',
                    'Pemahaman dasar tentang Jaringan seperti IPV4, TCP/IP, dan Model OSI.',
                    'Tersertifikasi dalam konsep jaringan dasar, termasuk pengalamatan IP, protokol jaringan, dan konfigurasi router/switch dasar.',
                    'Terlatih dalam simulasi jaringan menggunakan PNETLab, berfokus pada desain jaringan, konfigurasi, dan troubleshooting dalam lingkungan virtual',
                    'Mempelajari ethical hacking, eksploitasi aplikasi dan jaringan, keamanan IoT, penetration testing, dan penilaian kerentanan dan pemindaian.',
                    'Mempelajari peluang dan tantangan AI, komputasi kuantum, dan kriptografi.',
                    'Mengenal berbagai jenis virus dan aplikasi berbahaya, termasuk bentuk dan metode serangannya.',
                    'Berpartisipasi dalam Olimpiade Jaringan MikroTik, mendemonstrasikan keterampilan dalam konfigurasi jaringan menggunakan MikroTik RouterOS.',
                    'Menyelesaikan kursus dasar Cisco, mencakup dasar-dasar jaringan, pengalamatan IP, dan router/switch pengantar.',
                    'Menyelesaikan kursus dasar Cisco, mencakup dasar-dasar jaringan, pengalamatan IP, dan router/switch pengantar.'
                ]
            },
            contact: {
                title: 'Hubungi Saya',
                description: 'Punya proyek dalam pikiran atau ingin berkolaborasi? Jangan ragu untuk menghubungi!',
                contactMe: 'Hubungi Saya'
            },
            footer: {
                rights: 'Hak Cipta Dilindungi.'
            }
        }
    };

    // Get language toggle button and CV download button
    const languageToggle = document.querySelector('.language-toggle');
    const cvDownloadBtn = document.getElementById('cv-download-btn');
    
    // Check if there's a saved language preference
    let currentLang = localStorage.getItem('language') || 'id'; // Default to Indonesian
    
    // Set initial language
    setLanguage(currentLang);
    
    // Toggle language when button is clicked
    languageToggle.addEventListener('click', function(e) {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'id' : 'en';
        setLanguage(currentLang);
        localStorage.setItem('language', currentLang);
    });
    
    // Function to set language
    function setLanguage(lang) {
         // Update website title
        document.getElementById('website-title').textContent = languages[lang].siteTitle;
    
        // Update navigation logo
        document.getElementById('nav-logo').textContent = languages[lang].logo;

        // Update language toggle icon/text
        languageToggle.innerHTML = lang === 'en' ? '<i class="fas fa-language"></i> ID' : '<i class="fas fa-language"></i> EN';
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update CV download link
        cvDownloadBtn.setAttribute('href', languages[lang].hero.cvPath);
        
        // Update navigation
        const navLinks = document.querySelectorAll('.nav-menu .nav-link:not(.theme-toggle):not(.language-toggle)');
        navLinks.forEach((link, index) => {
            if (index < languages[lang].nav.length) {
                link.textContent = languages[lang].nav[index];
            }
        });
        
        // Update hero section
        document.querySelector('.hero-buttons .btn-primary').textContent = languages[lang].hero.downloadCV;
        document.querySelector('.hero-buttons .btn-outline').textContent = languages[lang].hero.contactMe;
        
        // Update profile section
        document.querySelector('#profile .section-header h2').textContent = languages[lang].profile.title;
        document.querySelector('.profile-text h3').textContent = languages[lang].profile.greeting;
        document.querySelector('.profile-text > p').textContent = languages[lang].profile.description;
        document.querySelectorAll('.info-item h4')[0].textContent = languages[lang].profile.location;
        document.querySelectorAll('.info-item h4')[1].textContent = languages[lang].profile.email;
        
        // Update experience section
        document.querySelector('#experience .section-header h2').textContent = languages[lang].experience.title;
        document.querySelector('#experience .section-description').textContent = languages[lang].experience.description;
        
        // Update "Present" text in timeline
        const timelineDates = document.querySelectorAll('.timeline-date span');
        timelineDates.forEach(date => {
            if (date.textContent.includes('Present') || date.textContent.includes('Sekarang')) {
                date.textContent = date.textContent.replace(
                    lang === 'en' ? 'Sekarang' : 'Present', 
                    lang === 'en' ? 'Present' : 'Sekarang'
                );
            }
        });
        
        // Update experience achievements
        const experienceCards = document.querySelectorAll('.experience-card');
        experienceCards.forEach((card, cardIndex) => {
            if (cardIndex < languages[lang].experience.achievements.length) {
                const achievements = card.querySelectorAll('.experience-achievements li');
                achievements.forEach((achievement, achievementIndex) => {
                    if (achievementIndex < languages[lang].experience.achievements[cardIndex].length) {
                        achievement.textContent = languages[lang].experience.achievements[cardIndex][achievementIndex];
                    }
                });
            }
        });
        
        // Update projects section
        document.querySelector('#projects .section-header h2').textContent = languages[lang].projects.title;
        document.querySelector('#projects .section-description').textContent = languages[lang].projects.description;
        
        // Update project descriptions and buttons
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            if (index < languages[lang].projects.descriptions.length) {
                card.querySelector('.project-info > p').textContent = languages[lang].projects.descriptions[index];
                // Update project button text
                const projectBtn = card.querySelector('.project-links .btn-sm');
                if (projectBtn) {
                    projectBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> ${languages[lang].projects.project}`;
                }
            }
        });
        
        // Update certificates section
        document.querySelector('#certificates .section-header h2').textContent = languages[lang].certificates.title;
        document.querySelector('#certificates .section-description').textContent = languages[lang].certificates.description;
        
        // Update certificate descriptions
        const certificateCards = document.querySelectorAll('.certificate-card');
        certificateCards.forEach((card, index) => {
            if (index < languages[lang].certificates.descriptions.length) {
                const description = card.querySelector('.certificate-description p');
                if (description) {
                    description.textContent = languages[lang].certificates.descriptions[index];
                }
            }
        });
        
        // Update contact section
        document.querySelector('#contact .section-header h2').textContent = languages[lang].contact.title;
        document.querySelector('.contact-content > p').textContent = languages[lang].contact.description;
        document.querySelector('.contact-content .btn-primary').textContent = languages[lang].contact.contactMe;
        
        // Update footer
        const footerText = document.querySelector('.footer p');
        footerText.innerHTML = `&copy; <span id="current-year"></span> Dzakwan Efendi. ${languages[lang].footer.rights}`;
        
        // Make sure the current year is still set
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }
});