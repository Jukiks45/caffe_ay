// ═══════════════ MENU DATA ═══════════════
const menuData = [
    // HEAVY FOOD
    // → nasi-ayam-bakar.jpg  / nasi-ayam-goreng.jpg  → Nasi Ayam (image-select)
    {
        id: 'h1',
        name: 'Nasi Ayam',
        price: 17,
        category: 'heavy',
        desc: 'Nasi hangat disajikan dengan ayam lezat (bakar / goreng) rempah pilihan.',
        options: {
            type: 'image-select',
            name: 'Metode',
            list: [
                { name: 'Bakar', img: 'img/menu/nasi-ayam-bakar.jpg' },
                { name: 'Goreng', img: 'img/menu/nasi-ayam-goreng.jpg' }
            ]
        },
        gradient: 'from-[#8B5E3C] to-[#5C2E0A]',
        img: 'img/menu/nasi-ayam-bakar.jpg'
    },
    { id: 'h2', name: 'Nasi Ayam Sambal Matah', price: 18, category: 'heavy', desc: 'Ayam krispi berpadu dengan kelezatan sambal matah segar khas Bali.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]', img: 'img/menu/nasi-ayam-sambal-matah.jpg' },
    { id: 'h3', name: 'Nasi Ayam Teriyaki', price: 18, category: 'heavy', desc: 'Tumisan daging ayam lezat bersiram saus teriyaki gurih manis.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]', img: 'img/menu/nasi-ayam-teriyaki.jpg' },
    // → nasi-ayam-geprek.jpg → Nasi Ayam Geprek
    { id: 'h4', name: 'Nasi Ayam Geprek', price: 18, category: 'heavy', desc: 'Ayam goreng renyah digeprek dengan sambal korek bawang pedas.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]', img: 'img/menu/nasi-ayam-geprek.jpg' },
    // → ayam-utuh-bakar.jpg / ayam-utuh-goreng.jpg → Nasi Bebek (pakai gambar serupa, bebek belum ada fotonya)
    {
        id: 'h5',
        name: 'Nasi Bebek',
        price: 23,
        category: 'heavy',
        desc: 'Nasi hangat dengan bebek gurih empuk bumbu meresap (bakar / goreng).',
        options: {
            type: 'image-select',
            name: 'Metode',
            list: [
                { name: 'Bakar', img: 'img/menu/nasi-bebek-goreng.jpg' },
                { name: 'Goreng', img: 'img/menu/nasi-bebek-goreng.jpg' }
            ]
        },
        gradient: 'from-[#8B5E3C] to-[#5C2E0A]',
        img: 'img/menu/nasi-bebek-goreng.jpg'
    },
    // → nasi-lele.jpg → Nasi Lele
    { id: 'h6', name: 'Nasi Lele', price: 15, category: 'heavy', desc: 'Lele goreng renyah disajikan hangat dengan sambal terasi.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]', img: 'img/menu/nasi-lele.jpg' },
    // → nasi-goreng.jpg → Nasi Goreng
    { id: 'h7', name: 'Nasi Goreng', price: 12, category: 'heavy', desc: 'Nasi goreng racikan khas CAFFE AY disajikan dengan telur.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]', img: 'img/menu/nasi-goreng.jpg' },
    // → nasi-goreng-jawa.jpg → Nasi Goreng Jawa
    { id: 'h8', name: 'Nasi Goreng Jawa', price: 12, category: 'heavy', desc: 'Nasi goreng bumbu tradisional Jawa gurih manis dengan mie & sayuran.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]', img: 'img/menu/nasi-goreng-jawa.jpg' },
    // → nasi-gila.jpg → Nasi Gila
    { id: 'h9', name: 'Nasi Gila', price: 18, category: 'heavy', desc: 'Nasi hangat bertabur tumisan sosis, bakso, dan telur pedas melimpah.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]', img: 'img/menu/nasi-gila.jpg' },
    // → steak-ayam.webp → Steak Ayam
    { id: 'h10', name: 'Steak Ayam', price: 20, category: 'heavy', desc: 'Daging dada ayam panggang dengan siraman saus steak & kentang.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]', img: 'img/menu/steak-ayam.webp' },
    // → chicken-stik-ayam.jpg → Chicken Steak Ayam
    { id: 'h11', name: 'Chicken Steak Ayam', price: 14, category: 'heavy', desc: 'Steak ayam krispi tepung disiram saus pedas manis mantap (balado / caos).', options: { type: 'select', name: 'Saus', list: ['Balado', 'Caos'] }, gradient: 'from-[#8B5E3C] to-[#5C2E0A]', img: 'img/menu/chicken-stik-ayam.jpg' },

    // SOUPY FOOD
    { id: 'sp1', name: 'Bakso', price: 10, category: 'soupy', desc: 'Bakso kenyal kuah kaldu sapi hangat disajikan dengan mie.', gradient: 'from-[#C8A882] to-[#8B5E3C]', img: 'img/menu/bakso.png' },
    { id: 'sp2', name: 'Seblak Kuah', price: 10, category: 'soupy', desc: 'Camilan kerupuk basah kuah kencur pedas merah berlevel (LVL 1, 2, 3).', options: { type: 'select', name: 'Level', list: ['LVL 1', 'LVL 2', 'LVL 3'] }, gradient: 'from-[#C8A882] to-[#8B5E3C]', img: 'img/menu/seblak.jpeg' },
    { id: 'sp3', name: 'Seblak Goreng', price: 10, category: 'soupy', desc: 'Seblak goreng tumis kering pedas wangi kencur aroma khas (LVL 1, 2, 3).', options: { type: 'select', name: 'Level', list: ['LVL 1', 'LVL 2', 'LVL 3'] }, gradient: 'from-[#C8A882] to-[#8B5E3C]', img: 'img/menu/seblak.jpeg' },
    // → mie-gacor-goreng.jpg / mie-gacor-kuah.jpg → Mie Gacor (image-select)
    {
        id: 'sp4',
        name: 'Mie Gacor',
        price: 12,
        category: 'soupy',
        desc: 'Mie pedas manis dengan taburan ayam cincang kering & pangsit (LVL 1, 2, 3).',
        options: {
            type: 'image-select',
            name: 'Jenis',
            list: [
                { name: 'Goreng', img: 'img/menu/mie-gacor-goreng.jpg' },
                { name: 'Kuah', img: 'img/menu/mie-gacor-kuah.jpg' }
            ]
        },
        gradient: 'from-[#C8A882] to-[#8B5E3C]',
        img: 'img/menu/mie-gacor-goreng.jpg'
    },
    // → mie-nyemek.jpeg → Mie Nyemek
    { id: 'sp5', name: 'Mie Nyemek', price: 15, category: 'soupy', desc: 'Mie dimasak basah kuah kental dengan telur pedas gurih mantap (LVL 1, 2, 3).', options: { type: 'select', name: 'Level', list: ['LVL 1', 'LVL 2', 'LVL 3'] }, gradient: 'from-[#C8A882] to-[#8B5E3C]', img: 'img/menu/mie-nyemek.jpeg' },

    // SNACK
    { id: 'sn1', name: 'Dimsum Mentai', price: 15, category: 'snack', desc: 'Dimsum ayam kukus dilapisi saus mentai bakar gurih creamy.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/dismsum-mentai.jpg' },
    // → mix-plate.jpg → Mix Platter
    { id: 'sn2', name: 'Mix Platter', price: 12, category: 'snack', desc: 'Kentang goreng, sosis, dan nugget disajikan dalam satu piring.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/mix-plate.jpg' },
    // → bannana-chesee.jpg → Banana Cheese
    { id: 'sn3', name: 'Banana Cheese', price: 12, category: 'snack', desc: 'Pisang goreng manis empuk ditaburi keju parut melimpah.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/bannana-chesee.jpg' },
    { id: 'sn4', name: 'Sosis Bakar', price: 12, category: 'snack', desc: 'Sosis jumbo panggang dengan balutan mayones & saus sambal.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/sosis-bakar.jpg' },
    // → risoles-mayo.jpg → Risol Mayo
    { id: 'sn5', name: 'Risol Mayo', price: 12, category: 'snack', desc: 'Risol renyah isi smoked beef, telur rebus, dan mayones manis.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/risoles-mayo.jpg' },
    { id: 'sn6', name: 'Kentang Goreng', price: 10, category: 'snack', desc: 'French fries krispi gurih asin penyegar waktu santai.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/kentang-goreng.jpg' },
    { id: 'sn7', name: 'Roti Bakar', price: 10, category: 'snack', desc: 'Roti panggang mentega manis dengan pilihan topping meses/keju.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/roti-bakar.jpg' },
    { id: 'sn8', name: 'Cireng', price: 10, category: 'snack', desc: 'Cireng salju renyah kenyal disajikan dengan sambal rujak asam pedas.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/cireng.jpg' },
    { id: 'sn9', name: 'Siomay Crispy', price: 10, category: 'snack', desc: 'Siomay goreng tepung krispi renyah dengan saus sambal.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/siomay-crispy.jpg' },
    { id: 'sn10', name: 'Tahu Crispy', price: 10, category: 'snack', desc: 'Tahu goreng krispi kecil-kecil dengan taburan bumbu penyedap.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/tahu-crispy.jpg' },
    { id: 'sn11', name: 'Sempol', price: 10, category: 'snack', desc: 'Camilan aci ayam tusuk dibalur telur goreng renyah.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/sempol.jpg' },
    { id: 'sn12', name: 'Tempe Mendoan', price: 8, category: 'snack', desc: 'Tempe lebar dibalur tepung bumbu ketumbar dan daun bawang.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/tempe-mendoan.jpg' },
    // → stik-banana.jpg → Stik Banana
    { id: 'sn13', name: 'Stik Banana', price: 12, category: 'snack', desc: 'Stik pisang renyah berselimut saus rasa premium (choco, matcha, keju, tiramisu).', options: { type: 'select', name: 'Rasa', list: ['Choco', 'Matcha', 'Keju', 'Tiramisu'] }, gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/stik-banana.jpg' },

    // ADDITIONAL FOOD
    { id: 'ad1', name: 'Terong Balado', price: 10, category: 'additional', desc: 'Terong goreng lembut dibalur sambal balado merah.', gradient: 'from-[#EDE0CC] to-[#C8A882]', img: 'img/menu/terong-balado.jpg' },
    { id: 'ad2', name: 'Cah Kangkung', price: 10, category: 'additional', desc: 'Tumis kangkung segar bawang putih wangi bumbu gurih.', gradient: 'from-[#EDE0CC] to-[#C8A882]', img: 'img/menu/cah-kangkung.jpg' },
    { id: 'ad3', name: 'Oseng Tahu Toge', price: 10, category: 'additional', desc: 'Tumis tahu kotak dan tauge segar praktis bergizi.', gradient: 'from-[#EDE0CC] to-[#C8A882]', img: 'img/menu/oseng-tahu-toge.jpg' },
    // → telur-mata-sapi.jpg → Telor
    { id: 'ad4', name: 'Telor', price: 5, category: 'additional', desc: 'Tambahan telur goreng masak sesuai selera (dadar / ceplok).', options: { type: 'select', name: 'Metode', list: ['Dadar', 'Ceplok'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]', img: 'img/menu/telur-mata-sapi.jpg' },
    { id: 'ad5', name: 'Nasi Putih', price: 3, category: 'additional', desc: 'Satu porsi nasi putih hangat pulen.', gradient: 'from-[#EDE0CC] to-[#C8A882]', img: 'img/menu/nasi-putih.jpg' },

    // SPESIAL
    // → ayam-utuh-bakar.jpg / ayam-utuh-goreng.jpg → Ayam Utuh (image-select)
    {
        id: 'spc1',
        name: 'Ayam Utuh',
        price: 55,
        category: 'special',
        desc: 'Satu ekor ayam utuh porsi besar dimasak matang meresap (bakar / goreng).',
        options: {
            type: 'image-select',
            name: 'Metode',
            list: [
                { name: 'Bakar', img: 'img/menu/ayam-utuh-bakar.jpg' },
                { name: 'Goreng', img: 'img/menu/ayam-utuh-goreng.jpg' }
            ]
        },
        gradient: 'from-[#5C2E0A] to-[#3B1F0E]',
        img: 'img/menu/ayam-utuh-bakar.jpg'
    },
    // → gurame-bakar.jpg / gurame-asam-manis.jpg → Gurame (image-select)
    {
        id: 'spc2',
        name: 'Gurame',
        price: 60,
        category: 'special',
        desc: 'Ikan gurame segar porsi besar dimasak bumbu premium (bakar / asam manis).',
        options: {
            type: 'image-select',
            name: 'Metode',
            list: [
                { name: 'Bakar', img: 'img/menu/gurame-bakar.jpg' },
                { name: 'Asam Manis', img: 'img/menu/gurame-asam-manis.jpg' }
            ]
        },
        gradient: 'from-[#5C2E0A] to-[#3B1F0E]',
        img: 'img/menu/gurame-bakar.jpg'
    },

    // MANUAL BREW (DRINK)
    // → kop-tubruk-AY.jpeg → Tubruk AY
    { id: 'd_mb1', name: 'Tubruk AY', price: 6, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi hitam tubruk khas racikan CAFFE AY.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/kop-tubruk-AY.jpeg' },
    // → tubruk-AY-susu.webp → Tubruk AY Susu
    { id: 'd_mb2', name: 'Tubruk AY Susu', price: 8, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi hitam tubruk AY disajikan manis dengan susu kental.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/tubruk-AY-susu.webp' },
    // → kopi-tubruk-dampit.jpeg → Tubruk Dampit
    { id: 'd_mb3', name: 'Tubruk Dampit', price: 7, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi tubruk menggunakan biji pilihan Dampit robusta.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/kopi-tubruk-dampit.jpeg' },
    // → kopi-turbuk-dampit-susu.jpeg → Tubruk Dampit Susu
    { id: 'd_mb4', name: 'Tubruk Dampit Susu', price: 9, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi tubruk Dampit dengan paduan susu kental manis.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/kopi-turbuk-dampit-susu.jpeg' },
    // → kopi-tubruk-jahe.webp → Tubruk Jahe
    { id: 'd_mb5', name: 'Tubruk Jahe', price: 9, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi hitam tubruk hangat beraroma jahe bakar geprek.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/kopi-tubruk-jahe.webp' },
    // → kopi-turbuk-jahesusu.jpg → Tubruk Jahe Susu
    { id: 'd_mb6', name: 'Tubruk Jahe Susu', price: 10, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi tubruk jahe hangat berpadu manisnya susu kental.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/kopi-turbuk-jahesusu.jpg' },

    // COFFEE (DRINK)
    // → cappucino.jpg / capucino-ice.jpg → Cappucino (split-price + img)
    {
        id: 'd_cf1',
        name: 'Cappucino',
        price: 15,
        category: 'drinks',
        sub: 'Coffee',
        desc: 'Double espresso disajikan dengan foam susu hangat tebal.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 15, img: 'img/menu/cappucino.jpg' },
                { name: 'Ice', price: 15, img: 'img/menu/capucino-ice.jpg' }
            ]
        },
        gradient: 'from-[#C8A882] to-[#7A4520]',
        img: 'img/menu/cappucino.jpg'
    },
    // → coffe-latte-hot.jpg / coffe-latte-ice.jpg → Coffee Latte (split-price + img)
    {
        id: 'd_cf2',
        name: 'Coffee Latte',
        price: 15,
        category: 'drinks',
        sub: 'Coffee',
        desc: 'Espresso creamy dengan takaran susu hangat melimpah.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 15, img: 'img/menu/coffe-latte-hot.jpg' },
                { name: 'Ice', price: 15, img: 'img/menu/coffe-latte-ice.jpg' }
            ]
        },
        gradient: 'from-[#C8A882] to-[#7A4520]',
        img: 'img/menu/coffe-latte-hot.jpg'
    },
    // → caramel-latte-hot.jpg / caramel-ice.jpg → Caramel Latte (split-price + img)
    {
        id: 'd_cf3',
        name: 'Caramel Latte',
        price: 15,
        category: 'drinks',
        sub: 'Coffee',
        desc: 'Espresso latte dengan sirup caramel wangi gurih.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 15, img: 'img/menu/caramel-latte-hot.jpg' },
                { name: 'Ice', price: 15, img: 'img/menu/caramel-ice.jpg' }
            ]
        },
        gradient: 'from-[#C8A882] to-[#7A4520]',
        img: 'img/menu/caramel-latte-hot.jpg'
    },
    // → hazelnut-latte-hot.jpg / hazelnut-latte-ice.jpg → Hazelnut Latte (split-price + img)
    {
        id: 'd_cf4',
        name: 'Hazelnut Latte',
        price: 15,
        category: 'drinks',
        sub: 'Coffee',
        desc: 'Espresso latte dengan sirup hazelnut manis aroma kacang.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 15, img: 'img/menu/hazelnut-latte-hot.jpg' },
                { name: 'Ice', price: 15, img: 'img/menu/hazelnut-latte-ice.jpg' }
            ]
        },
        gradient: 'from-[#C8A882] to-[#7A4520]',
        img: 'img/menu/hazelnut-latte-hot.jpg'
    },
    // → vanilla-hot.jpeg / vanilla-latte-ice.png → Vanila Latte (split-price + img)
    {
        id: 'd_cf5',
        name: 'Vanila Latte',
        price: 15,
        category: 'drinks',
        sub: 'Coffee',
        desc: 'Espresso latte dengan sirup vanila harum manis lembut.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 15, img: 'img/menu/vanilla-hot.jpeg' },
                { name: 'Ice', price: 15, img: 'img/menu/vanilla-latte-ice.png' }
            ]
        },
        gradient: 'from-[#C8A882] to-[#7A4520]',
        img: 'img/menu/vanilla-hot.jpeg'
    },
    // → mochacciono-hot2.jpg / mochaccino-ice.jpg → Mochaccino (split-price + img)
    {
        id: 'd_cf6',
        name: 'Mochaccino',
        price: 15,
        category: 'drinks',
        sub: 'Coffee',
        desc: 'Perpaduan seimbang espresso, susu, dan cokelat manis.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 15, img: 'img/menu/mochacciono-hot2.jpg' },
                { name: 'Ice', price: 15, img: 'img/menu/mochaccino-ice.jpg' }
            ]
        },
        gradient: 'from-[#C8A882] to-[#7A4520]',
        img: 'img/menu/mochacciono-hot2.jpg'
    },
    // → cortado-hot.jpg / cortado-ice.jpg → Cortado (split-price + img)
    {
        id: 'd_cf7',
        name: 'Cortado',
        price: 15,
        category: 'drinks',
        sub: 'Coffee',
        desc: 'Espresso dengan susu hangat perbandingan seimbang 1:1.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 15, img: 'img/menu/cortado-hot.jpg' },
                { name: 'Ice', price: 15, img: 'img/menu/cortado-ice.jpg' }
            ]
        },
        gradient: 'from-[#C8A882] to-[#7A4520]',
        img: 'img/menu/cortado-hot.jpg'
    },
    // → bonbom.webp → Bombon
    { id: 'd_cf8', name: 'Bombon', price: 12, category: 'drinks', sub: 'Coffee', desc: 'Shot espresso disajikan di atas susu kental manis hangat.', options: { type: 'select', name: 'Suhu', list: ['Hot'] }, gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/bonbom.webp' },
    // → americano-hot.jpg / americano-ice.webp → Americano (split-price + img)
    {
        id: 'd_cf9',
        name: 'Americano',
        price: 10,
        category: 'drinks',
        sub: 'Coffee',
        desc: 'Espresso shot pekat diencerkan dengan air panas/es.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 10, img: 'img/menu/americano-hot.jpg' },
                { name: 'Ice', price: 12, img: 'img/menu/americano-ice.webp' }
            ]
        },
        gradient: 'from-[#C8A882] to-[#7A4520]',
        img: 'img/menu/americano-hot.jpg'
    },
    { id: 'd_cf10', name: 'Espresso', price: 10, category: 'drinks', sub: 'Coffee', desc: 'Ekstraksi kopi murni konsentrat tinggi mantap.', options: { type: 'select', name: 'Suhu', list: ['Hot'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf11', name: 'Kopsu Creamy', price: 12, category: 'drinks', sub: 'Coffee', desc: 'Kopi susu dingin racikan khas super creamy manis pas.', options: { type: 'select', name: 'Suhu', list: ['Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf12', name: 'Kopsu Aren', price: 12, category: 'drinks', sub: 'Coffee', desc: 'Kopi susu dingin dengan gula aren murni aroma khas.', options: { type: 'select', name: 'Suhu', list: ['Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },

    // TEA BASED (DRINK)
    // → lemon-tea-hot.jpg → Lemon Tea (split-price + img, ice pakai lemonade karena tidak ada foto ice sendiri)
    {
        id: 'd_t1',
        name: 'Lemon Tea',
        price: 7,
        category: 'drinks',
        sub: 'Tea Based',
        desc: 'Teh melati wangi berpadu perasan jeruk lemon asli segar.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 7, img: 'img/menu/lemon-tea-hot.jpg' },
                { name: 'Ice', price: 10, img: 'img/menu/lemonade.jpg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/lemon-tea-hot.jpg'
    },
    // → (tidak ada gambar spesifik) Teh Manis tetap split-price biasa
    {
        id: 'd_t2',
        name: 'Teh Manis',
        price: 5,
        category: 'drinks',
        sub: 'Tea Based',
        desc: 'Seduhan teh melati manis tradisional segar.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 5 },
                { name: 'Ice', price: 7 }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]'
    },
    // → teh-tarik-hot.jpg / teh-tarik-ice.jpg → Teh Tarik (split-price + img)
    {
        id: 'd_t3',
        name: 'Teh Tarik',
        price: 8,
        category: 'drinks',
        sub: 'Tea Based',
        desc: 'Teh pekat ditarik berbusa lembut dengan susu kental.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 8, img: 'img/menu/teh-tarik-hot.jpg' },
                { name: 'Ice', price: 10, img: 'img/menu/teh-tarik-ice.jpg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/teh-tarik-hot.jpg'
    },
    // → lecy-tea.jpg → Lychee Tea
    { id: 'd_t4', name: 'Lychee Tea', price: 12, category: 'drinks', sub: 'Tea Based', desc: 'Teh es leci manis disajikan lengkap dengan buah leci asli.', options: { type: 'select', name: 'Suhu', list: ['Ice'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]', img: 'img/menu/lecy-tea.jpg' },
    // → berry-tea.jpg → Berry Tea
    { id: 'd_t5', name: 'Berry Tea', price: 12, category: 'drinks', sub: 'Tea Based', desc: 'Teh es rasa buah berry merah yang asam manis menyegarkan.', options: { type: 'select', name: 'Suhu', list: ['Ice'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]', img: 'img/menu/berry-tea.jpg' },

    // MILK BASED (DRINK)
    // → vanilla-hot.jpeg / vanilla-ice.jpg → Vanilla Milk (split-price + img)
    {
        id: 'd_m1',
        name: 'Vanilla Milk',
        price: 10,
        category: 'drinks',
        sub: 'Milk Based',
        desc: 'Minuman susu segar manis beraroma vanilla wangi lembut.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 10, img: 'img/menu/vanilla-hot.jpeg' },
                { name: 'Ice', price: 10, img: 'img/menu/vanilla-ice.jpg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/vanilla-hot.jpeg'
    },
    // → (tidak ada choco-hot.jpg, pakai choco-ice.png untuk keduanya) → Choco Milk
    {
        id: 'd_m2',
        name: 'Choco Milk',
        price: 10,
        category: 'drinks',
        sub: 'Milk Based',
        desc: 'Cokelat premium pekat dipadukan susu manis gurih.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 10, img: 'img/menu/choco-ice.png' },
                { name: 'Ice', price: 10, img: 'img/menu/choco-ice.png' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/choco-ice.png'
    },
    // → taro-hot.jpeg → Taro Milk (split-price + img, ice tidak ada foto)
    {
        id: 'd_m3',
        name: 'Taro Milk',
        price: 10,
        category: 'drinks',
        sub: 'Milk Based',
        desc: 'Susu manis creamy bercitarasa taro khas ubi ungu wangi.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 10, img: 'img/menu/taro-hot.jpeg' },
                { name: 'Ice', price: 10, img: 'img/menu/taro-hot.jpeg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/taro-hot.jpeg'
    },
    // → oreo-hot.jpeg → Oreo Milk
    {
        id: 'd_m4',
        name: 'Oreo Milk',
        price: 10,
        category: 'drinks',
        sub: 'Milk Based',
        desc: 'Susu vanilla blended bertabur remahan biskuit Oreo manis.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 10, img: 'img/menu/oreo-hot.jpeg' },
                { name: 'Ice', price: 10, img: 'img/menu/oreo-hot.jpeg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/oreo-hot.jpeg'
    },
    // → milo-hot.jpeg → Milo (split-price + img)
    {
        id: 'd_m5',
        name: 'Milo',
        price: 10,
        category: 'drinks',
        sub: 'Milk Based',
        desc: 'Minuman cokelat susu Milo malt legendaris disukai semua usia.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 10, img: 'img/menu/milo-hot.jpeg' },
                { name: 'Ice', price: 12, img: 'img/menu/milo-hot.jpeg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/milo-hot.jpeg'
    },
    // → matcha-hot.jpeg → Matcha Milk (split-price + img)
    {
        id: 'd_m6',
        name: 'Matcha Milk',
        price: 10,
        category: 'drinks',
        sub: 'Milk Based',
        desc: 'Matcha khas Jepang pekat berpadu dengan susu manis.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 10, img: 'img/menu/matcha-hot.jpeg' },
                { name: 'Ice', price: 12, img: 'img/menu/matcha-hot.jpeg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/matcha-hot.jpeg'
    },
    // → red-velvet-hot.jpeg / red-velvet.jpg → Redvelvet Milk (split-price + img)
    {
        id: 'd_m7',
        name: 'Redvelvet Milk',
        price: 10,
        category: 'drinks',
        sub: 'Milk Based',
        desc: 'Minuman red velvet manis rasa cake cokelat dipadu susu.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 10, img: 'img/menu/red-velvet-hot.jpeg' },
                { name: 'Ice', price: 12, img: 'img/menu/red-velvet.jpg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/red-velvet-hot.jpeg'
    },
    // → avocado-hot.jpeg → Avocado Milk (split-price + img)
    {
        id: 'd_m8',
        name: 'Avocado Milk',
        price: 10,
        category: 'drinks',
        sub: 'Milk Based',
        desc: 'Susu segar manis rasa buah alpukat super gurih creamy.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Hot', price: 10, img: 'img/menu/avocado-hot.jpeg' },
                { name: 'Ice', price: 12, img: 'img/menu/avocado-hot.jpeg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/avocado-hot.jpeg'
    },

    // SIGNATURE (DRINK)
    // → strawberry-yalkut-ice.jpg → Berry Yakult
    { id: 'd_s1', name: 'Berry Yakult', price: 15, category: 'drinks', sub: 'Signature', desc: 'Minuman soda berry dengan rasa asam Yakult yang menyegarkan.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/strawberry-yalkut-ice.jpg' },
    { id: 'd_s2', name: 'Choco Berry', price: 15, category: 'drinks', sub: 'Signature', desc: 'Perpaduan cokelat dingin manis dibalur sirup berry segar.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/chochoberry.jpg' },
    { id: 'd_s3', name: 'Sunrise Mint', price: 15, category: 'drinks', sub: 'Signature', desc: 'Sajian jeruk segar dingin berpadu sensasi mint sejuk.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/sunrise-mint.jpg' },
    { id: 'd_s4', name: 'Berry Forest', price: 15, category: 'drinks', sub: 'Signature', desc: 'Susu es berlumur selai berry merah segar manis.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/berry-forest.jpg' },
    { id: 'd_s5', name: 'Lychee Forest', price: 15, category: 'drinks', sub: 'Signature', desc: 'Es susu segar rasa buah leci harum manis lezat.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/lecy-forest.jpg' },
    { id: 'd_s6', name: 'Matchapresso', price: 15, category: 'drinks', sub: 'Signature', desc: 'Layer cantik matcha manis berpadu espresso shot kuat.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/matchapresso.jpg' },
    // → matchaberry.jpg → Matcha Berry
    { id: 'd_s7', name: 'Matcha Berry', price: 15, category: 'drinks', sub: 'Signature', desc: 'Minuman berlapis matcha Jepang and berry merah segar.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/matchaberry.jpg' },
    // → sunrise-mojito.jpg → Sunrise Mojito (bonus — jika ada di menu)
    // { id: 'd_s8', name: 'Sunrise Mojito', price: 15, category: 'drinks', sub: 'Signature', desc: 'Mojito segar dengan sentuhan sunrise tropical.', gradient: 'from-[#C8A882] to-[#7A4520]', img: 'img/menu/sunrise-mojito.jpg' },

    // MIXOLOGY (DRINK)
    { id: 'd_mx1', name: 'Soda Gembira', price: 12, category: 'drinks', sub: 'Mixology', desc: 'Soda dingin manis berpadu susu kental & sirup cocopandan merah.', gradient: 'from-[#EDE0CC] to-[#C8A882]', img: 'img/menu/soda-gembira.jpg' },
    { id: 'd_mx2', name: 'Lemonade', price: 12, category: 'drinks', sub: 'Mixology', desc: 'Minuman perasan jeruk lemon murni asam segar pelepas dahaga.', gradient: 'from-[#EDE0CC] to-[#C8A882]', img: 'img/menu/lemonade.jpg' },

    // HERBS (DRINK)
    { id: 'd_h1', name: 'Jahe', price: 5, category: 'drinks', sub: 'Herbs', desc: 'Wedang rebusan jahe merah murni hangat pedas herbal.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/jahe.jpg' },
    { id: 'd_h2', name: 'Jahe Susu', price: 7, category: 'drinks', sub: 'Herbs', desc: 'Wedang jahe merah hangat dipadu manisnya susu kental.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/jahe-susu.jpg' },
    { id: 'd_h3', name: 'Jahe Sereh', price: 10, category: 'drinks', sub: 'Herbs', desc: 'Wedang jahe rebus dengan batang sereh geprek harum menenangkan.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/jahe-sirih.jpg' },
    { id: 'd_h4', name: 'Uwuh', price: 10, category: 'drinks', sub: 'Herbs', desc: 'Wedang uwuh tradisional aneka rempah alami wangi hangat.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/wedhang-uwuh.jpg' },
    { id: 'd_h5', name: 'JKJS (Jahe Kencur Jeruk Sereh)', price: 10, category: 'drinks', sub: 'Herbs', desc: 'Herbal hangat berisi jahe, kencur, sereh, dan jeruk nipis.', gradient: 'from-[#C8A882] to-[#EDE0CC]', img: 'img/menu/jkjs(jahe-kencur-jeruk-sirih).jpg' },

    // MINERAL (DRINK)
    // → air-mineral.jpeg / air-mineral-ice.jpeg → Mineral (split-price + img)
    {
        id: 'd_mrl1',
        name: 'Mineral',
        price: 5,
        category: 'drinks',
        sub: 'Mineral',
        desc: 'Air mineral kemasan botol higienis.',
        options: {
            type: 'split-price',
            name: 'Suhu',
            list: [
                { name: 'Biasa', price: 5, img: 'img/menu/air-mineral.jpeg' },
                { name: 'Ice', price: 6, img: 'img/menu/air-mineral-ice.jpeg' }
            ]
        },
        gradient: 'from-[#EDE0CC] to-[#C8A882]',
        img: 'img/menu/air-mineral.jpeg'
    }
];