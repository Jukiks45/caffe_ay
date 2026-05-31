// ═══════════════ MENU DATA ═══════════════
const menuData = [
    // HEAVY FOOD
    { id: 'h1', name: 'Nasi Ayam', price: 17, category: 'heavy', desc: 'Nasi hangat disajikan dengan ayam lezat (bakar / goreng) rempah pilihan.', options: { type: 'select', name: 'Metode', list: ['Bakar', 'Goreng'] }, gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h2', name: 'Nasi Ayam Sambal Matah', price: 18, category: 'heavy', desc: 'Ayam krispi berpadu dengan kelezatan sambal matah segar khas Bali.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h3', name: 'Nasi Ayam Teriyaki', price: 18, category: 'heavy', desc: 'Tumisan daging ayam lezat bersiram saus teriyaki gurih manis.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h4', name: 'Nasi Ayam Geprek', price: 18, category: 'heavy', desc: 'Ayam goreng renyah digeprek dengan sambal korek bawang pedas.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h5', name: 'Nasi Bebek', price: 23, category: 'heavy', desc: 'Nasi hangat dengan bebek gurih empuk bumbu meresap (bakar / goreng).', options: { type: 'select', name: 'Metode', list: ['Bakar', 'Goreng'] }, gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h6', name: 'Nasi Lele', price: 15, category: 'heavy', desc: 'Lele goreng renyah disajikan hangat dengan sambal terasi.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h7', name: 'Nasi Goreng', price: 12, category: 'heavy', desc: 'Nasi goreng racikan khas CAFFE AY disajikan dengan telur.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h8', name: 'Nasi Goreng Jawa', price: 12, category: 'heavy', desc: 'Nasi goreng bumbu tradisional Jawa gurih manis dengan mie & sayuran.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h9', name: 'Nasi Gila', price: 18, category: 'heavy', desc: 'Nasi hangat bertabur tumisan sosis, bakso, dan telur pedas melimpah.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h10', name: 'Steak Ayam', price: 20, category: 'heavy', desc: 'Daging dada ayam panggang dengan siraman saus steak & kentang.', gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },
    { id: 'h11', name: 'Chicken Steak Ayam', price: 14, category: 'heavy', desc: 'Steak ayam krispi tepung disiram saus pedas manis mantap (balado / caos).', options: { type: 'select', name: 'Saus', list: ['Balado', 'Caos'] }, gradient: 'from-[#8B5E3C] to-[#5C2E0A]' },

    // SOUPY FOOD
    { id: 'sp1', name: 'Bakso', price: 10, category: 'soupy', desc: 'Bakso kenyal kuah kaldu sapi hangat disajikan dengan mie.', gradient: 'from-[#C8A882] to-[#8B5E3C]' },
    { id: 'sp2', name: 'Seblak Kuah', price: 10, category: 'soupy', desc: 'Camilan kerupuk basah kuah kencur pedas merah berlevel (LVL 1, 2, 3).', options: { type: 'select', name: 'Level', list: ['LVL 1', 'LVL 2', 'LVL 3'] }, gradient: 'from-[#C8A882] to-[#8B5E3C]' },
    { id: 'sp3', name: 'Seblak Goreng', price: 10, category: 'soupy', desc: 'Seblak goreng tumis kering pedas wangi kencur aroma khas (LVL 1, 2, 3).', options: { type: 'select', name: 'Level', list: ['LVL 1', 'LVL 2', 'LVL 3'] }, gradient: 'from-[#C8A882] to-[#8B5E3C]' },
    { id: 'sp4', name: 'Mie Gacor', price: 12, category: 'soupy', desc: 'Mie pedas manis dengan taburan ayam cincang kering & pangsit (LVL 1, 2, 3).', options: { type: 'select', name: 'Level', list: ['LVL 1', 'LVL 2', 'LVL 3'] }, gradient: 'from-[#C8A882] to-[#8B5E3C]' },
    { id: 'sp5', name: 'Mie Nyemek', price: 15, category: 'soupy', desc: 'Mie dimasak basah kuah kental dengan telur pedas gurih mantap (LVL 1, 2, 3).', options: { type: 'select', name: 'Level', list: ['LVL 1', 'LVL 2', 'LVL 3'] }, gradient: 'from-[#C8A882] to-[#8B5E3C]' },

    // SNACK
    { id: 'sn1', name: 'Dimsum Mentai', price: 15, category: 'snack', desc: 'Dimsum ayam kukus dilapisi saus mentai bakar gurih creamy.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn2', name: 'Mix Platter', price: 12, category: 'snack', desc: 'Kentang goreng, sosis, dan nugget disajikan dalam satu piring.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn3', name: 'Banana Cheese', price: 12, category: 'snack', desc: 'Pisang goreng manis empuk ditaburi keju parut melimpah.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn4', name: 'Sosis Bakar', price: 12, category: 'snack', desc: 'Sosis jumbo panggang dengan balutan mayones & saus sambal.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn5', name: 'Risol Mayo', price: 12, category: 'snack', desc: 'Risol renyah isi smoked beef, telur rebus, dan mayones manis.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn6', name: 'Kentang Goreng', price: 10, category: 'snack', desc: 'French fries krispi gurih asin penyegar waktu santai.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn7', name: 'Roti Bakar', price: 10, category: 'snack', desc: 'Roti panggang mentega manis dengan pilihan topping meses/keju.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn8', name: 'Cireng', price: 10, category: 'snack', desc: 'Cireng salju renyah kenyal disajikan dengan sambal rujak asam pedas.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn9', name: 'Siomay Crispy', price: 10, category: 'snack', desc: 'Siomay goreng tepung krispi renyah dengan saus sambal.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn10', name: 'Tahu Crispy', price: 10, category: 'snack', desc: 'Tahu goreng krispi kecil-kecil dengan taburan bumbu penyedap.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn11', name: 'Sempol', price: 10, category: 'snack', desc: 'Camilan aci ayam tusuk dibalur telur goreng renyah.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn12', name: 'Tempe Mendoan', price: 8, category: 'snack', desc: 'Tempe lebar dibalur tepung bumbu ketumbar dan daun bawang.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'sn13', name: 'Stik Banana', price: 12, category: 'snack', desc: 'Stik pisang renyah berselimut saus rasa premium (choco, matcha, keju, tiramisu).', options: { type: 'select', name: 'Rasa', list: ['Choco', 'Matcha', 'Keju', 'Tiramisu'] }, gradient: 'from-[#C8A882] to-[#EDE0CC]' },

    // ADDITIONAL FOOD
    { id: 'ad1', name: 'Terong Balado', price: 10, category: 'additional', desc: 'Terong goreng lembut dibalur sambal balado merah.', gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'ad2', name: 'Cah Kangkung', price: 10, category: 'additional', desc: 'Tumis kangkung segar bawang putih wangi bumbu gurih.', gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'ad3', name: 'Oseng Tahu Toge', price: 10, category: 'additional', desc: 'Tumis tahu kotak dan tauge segar praktis bergizi.', gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'ad4', name: 'Telor', price: 5, category: 'additional', desc: 'Tambahan telur goreng masak sesuai selera (dadar / ceplok).', options: { type: 'select', name: 'Metode', list: ['Dadar', 'Ceplok'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'ad5', name: 'Nasi Putih', price: 3, category: 'additional', desc: 'Satu porsi nasi putih hangat pulen.', gradient: 'from-[#EDE0CC] to-[#C8A882]' },

    // SPESIAL
    { id: 'spc1', name: 'Ayam Utuh', price: 55, category: 'special', desc: 'Satu ekor ayam utuh porsi besar dimasak matang meresap (bakar / goreng).', options: { type: 'select', name: 'Metode', list: ['Bakar', 'Goreng'] }, gradient: 'from-[#5C2E0A] to-[#3B1F0E]' },
    { id: 'spc2', name: 'Gurame', price: 60, category: 'special', desc: 'Ikan gurame segar porsi besar dimasak bumbu premium (bakar / asam manis).', options: { type: 'select', name: 'Metode', list: ['Bakar', 'Asam Manis'] }, gradient: 'from-[#5C2E0A] to-[#3B1F0E]' },

    // MANUAL BREW (DRINK)
    { id: 'd_mb1', name: 'Tubruk AY', price: 6, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi hitam tubruk khas racikan CAFFE AY.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_mb2', name: 'Tubruk AY Susu', price: 8, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi hitam tubruk AY disajikan manis dengan susu kental.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_mb3', name: 'Tubruk Dampit', price: 7, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi tubruk menggunakan biji pilihan Dampit robusta.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_mb4', name: 'Tubruk Dampit Susu', price: 9, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi tubruk Dampit dengan paduan susu kental manis.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_mb5', name: 'Tubruk Jahe', price: 9, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi hitam tubruk hangat beraroma jahe bakar geprek.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_mb6', name: 'Tubruk Jahe Susu', price: 10, category: 'drinks', sub: 'Manual Brew', desc: 'Kopi tubruk jahe hangat berpadu manisnya susu kental.', gradient: 'from-[#C8A882] to-[#7A4520]' },

    // COFFEE (DRINK)
    { id: 'd_cf1', name: 'Cappucino', price: 15, category: 'drinks', sub: 'Coffee', desc: 'Double espresso disajikan dengan foam susu hangat tebal.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf2', name: 'Coffee Latte', price: 15, category: 'drinks', sub: 'Coffee', desc: 'Espresso creamy dengan takaran susu hangat melimpah.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf3', name: 'Caramel Latte', price: 15, category: 'drinks', sub: 'Coffee', desc: 'Espresso latte dengan sirup caramel wangi gurih.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf4', name: 'Hazelnut Latte', price: 15, category: 'drinks', sub: 'Coffee', desc: 'Espresso latte dengan sirup hazelnut manis aroma kacang.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf5', name: 'Vanila Latte', price: 15, category: 'drinks', sub: 'Coffee', desc: 'Espresso latte dengan sirup vanila harum manis lembut.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf6', name: 'Mochaccino', price: 15, category: 'drinks', sub: 'Coffee', desc: 'Perpaduan seimbang espresso, susu, dan cokelat manis.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf7', name: 'Cortado', price: 15, category: 'drinks', sub: 'Coffee', desc: 'Espresso dengan susu hangat perbandingan seimbang 1:1.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf8', name: 'Bombon', price: 12, category: 'drinks', sub: 'Coffee', desc: 'Shot espresso disajikan di atas susu kental manis hangat.', options: { type: 'select', name: 'Suhu', list: ['Hot'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf9', name: 'Americano', price: 10, category: 'drinks', sub: 'Coffee', desc: 'Espresso shot pekat diencerkan dengan air panas/es.', options: { type: 'split-price', name: 'Suhu', list: [{ name: 'Hot', price: 10 }, { name: 'Ice', price: 12 }] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf10', name: 'Espresso', price: 10, category: 'drinks', sub: 'Coffee', desc: 'Ekstraksi kopi murni konsentrat tinggi mantap.', options: { type: 'select', name: 'Suhu', list: ['Hot'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf11', name: 'Kopsu Creamy', price: 12, category: 'drinks', sub: 'Coffee', desc: 'Kopi susu dingin racikan khas super creamy manis pas.', options: { type: 'select', name: 'Suhu', list: ['Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_cf12', name: 'Kopsu Aren', price: 12, category: 'drinks', sub: 'Coffee', desc: 'Kopi susu dingin dengan gula aren murni aroma khas.', options: { type: 'select', name: 'Suhu', list: ['Ice'] }, gradient: 'from-[#C8A882] to-[#7A4520]' },

    // TEA BASED (DRINK)
    { id: 'd_t1', name: 'Lemon Tea', price: 7, category: 'drinks', sub: 'Tea Based', desc: 'Teh melati wangi berpadu perasan jeruk lemon asli segar.', options: { type: 'split-price', name: 'Suhu', list: [{ name: 'Hot', price: 7 }, { name: 'Ice', price: 10 }] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_t2', name: 'Teh Manis', price: 5, category: 'drinks', sub: 'Tea Based', desc: 'Seduhan teh melati manis tradisional segar.', options: { type: 'split-price', name: 'Suhu', list: [{ name: 'Hot', price: 5 }, { name: 'Ice', price: 7 }] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_t3', name: 'Teh Tarik', price: 8, category: 'drinks', sub: 'Tea Based', desc: 'Teh pekat ditarik berbusa lembut dengan susu kental.', options: { type: 'split-price', name: 'Suhu', list: [{ name: 'Hot', price: 8 }, { name: 'Ice', price: 10 }] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_t4', name: 'Lychee Tea', price: 12, category: 'drinks', sub: 'Tea Based', desc: 'Teh es leci manis disajikan lengkap dengan buah leci asli.', options: { type: 'select', name: 'Suhu', list: ['Ice'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_t5', name: 'Berry Tea', price: 12, category: 'drinks', sub: 'Tea Based', desc: 'Teh es rasa buah berry merah yang asam manis menyegarkan.', options: { type: 'select', name: 'Suhu', list: ['Ice'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },

    // MILK BASED (DRINK)
    { id: 'd_m1', name: 'Vanilla Milk', price: 10, category: 'drinks', sub: 'Milk Based', desc: 'Minuman susu segar manis beraroma vanilla wangi lembut.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_m2', name: 'Choco Milk', price: 10, category: 'drinks', sub: 'Milk Based', desc: 'Cokelat premium pekat dipadukan susu manis gurih.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_m3', name: 'Taro Milk', price: 10, category: 'drinks', sub: 'Milk Based', desc: 'Susu manis creamy bercitarasa taro khas ubi ungu wangi.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_m4', name: 'Oreo Milk', price: 10, category: 'drinks', sub: 'Milk Based', desc: 'Susu vanilla blended bertabur remahan biskuit Oreo manis.', options: { type: 'select', name: 'Suhu', list: ['Hot', 'Ice'] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_m5', name: 'Milo', price: 10, category: 'drinks', sub: 'Milk Based', desc: 'Minuman cokelat susu Milo malt legendaris disukai semua usia.', options: { type: 'split-price', name: 'Suhu', list: [{ name: 'Hot', price: 10 }, { name: 'Ice', price: 12 }] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_m6', name: 'Matcha Milk', price: 10, category: 'drinks', sub: 'Milk Based', desc: 'Matcha khas Jepang pekat berpadu dengan susu manis.', options: { type: 'split-price', name: 'Suhu', list: [{ name: 'Hot', price: 10 }, { name: 'Ice', price: 12 }] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_m7', name: 'Redvelvet Milk', price: 10, category: 'drinks', sub: 'Milk Based', desc: 'Minuman red velvet manis rasa cake cokelat dipadu susu.', options: { type: 'split-price', name: 'Suhu', list: [{ name: 'Hot', price: 10 }, { name: 'Ice', price: 12 }] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_m8', name: 'Avocado Milk', price: 10, category: 'drinks', sub: 'Milk Based', desc: 'Susu segar manis rasa buah alpukat super gurih creamy.', options: { type: 'split-price', name: 'Suhu', list: [{ name: 'Hot', price: 10 }, { name: 'Ice', price: 12 }] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' },

    // SIGNATURE (DRINK)
    { id: 'd_s1', name: 'Berry Yakult', price: 15, category: 'drinks', sub: 'Signature', desc: 'Minuman soda berry dengan rasa asam Yakult yang menyegarkan.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_s2', name: 'Choco Berry', price: 15, category: 'drinks', sub: 'Signature', desc: 'Perpaduan cokelat dingin manis dibalur sirup berry segar.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_s3', name: 'Sunrise Mint', price: 15, category: 'drinks', sub: 'Signature', desc: 'Sajian jeruk segar dingin berpadu sensasi mint sejuk.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_s4', name: 'Berry Forest', price: 15, category: 'drinks', sub: 'Signature', desc: 'Susu es berlumur selai berry merah segar manis.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_s5', name: 'Lychee Forest', price: 15, category: 'drinks', sub: 'Signature', desc: 'Es susu segar rasa buah leci harum manis lezat.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_s6', name: 'Matchapresso', price: 15, category: 'drinks', sub: 'Signature', desc: 'Layer cantik matcha manis berpadu espresso shot kuat.', gradient: 'from-[#C8A882] to-[#7A4520]' },
    { id: 'd_s7', name: 'Matcha Berry', price: 15, category: 'drinks', sub: 'Signature', desc: 'Minuman berlapis matcha Jepang and berry merah segar.', gradient: 'from-[#C8A882] to-[#7A4520]' },

    // MIXOLOGY (DRINK)
    { id: 'd_mx1', name: 'Soda Gembira', price: 12, category: 'drinks', sub: 'Mixology', desc: 'Soda dingin manis berpadu susu kental & sirup cocopandan merah.', gradient: 'from-[#EDE0CC] to-[#C8A882]' },
    { id: 'd_mx2', name: 'Lemonade', price: 12, category: 'drinks', sub: 'Mixology', desc: 'Minuman perasan jeruk lemon murni asam segar pelepas dahaga.', gradient: 'from-[#EDE0CC] to-[#C8A882]' },

    // HERBS (DRINK)
    { id: 'd_h1', name: 'Jahe', price: 5, category: 'drinks', sub: 'Herbs', desc: 'Wedang rebusan jahe merah murni hangat pedas herbal.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'd_h2', name: 'Jahe Susu', price: 7, category: 'drinks', sub: 'Herbs', desc: 'Wedang jahe merah hangat dipadu manisnya susu kental.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'd_h3', name: 'Jahe Sereh', price: 10, category: 'drinks', sub: 'Herbs', desc: 'Wedang jahe rebus dengan batang sereh geprek harum menenangkan.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'd_h4', name: 'Uwuh', price: 10, category: 'drinks', sub: 'Herbs', desc: 'Wedang uwuh tradisional aneka rempah alami wangi hangat.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },
    { id: 'd_h5', name: 'JKJS (Jahe Kencur Jeruk Sereh)', price: 10, category: 'drinks', sub: 'Herbs', desc: 'Herbal hangat berisi jahe, kencur, sereh, dan jeruk nipis.', gradient: 'from-[#C8A882] to-[#EDE0CC]' },

    // MINERAL (DRINK)
    { id: 'd_mrl1', name: 'Mineral', price: 5, category: 'drinks', sub: 'Mineral', desc: 'Air mineral kemasan botol higienis.', options: { type: 'split-price', name: 'Suhu', list: [{ name: 'Biasa', price: 5 }, { name: 'Ice', price: 6 }] }, gradient: 'from-[#EDE0CC] to-[#C8A882]' }
];