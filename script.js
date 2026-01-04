const musicas = [
["We Don't Talk Anymore (feat. Selena Gomez)", "2.424.410.837", "1.199.257", "1.073.855", "Solo"],
["Calm Down (with Selena Gomez)", "1.799.965.367", "563.347", "582.429", "Solo"],
["Taki Taki (with Selena Gomez, Ozuna & Cardi B)", "1.778.443.720", "314.755", "319.448", "Solo"],
["It Ain’t Me (with Selena Gomez)", "1.663.358.938", "398.015", "351.376", "Solo"],
["Wolves", "1.513.329.217", "207.314", "204.467", "Solo"],
["Lose You To Love Me", "1.429.536.109", "236.902", "246.746", "Solo"],
["Back To You - From 13 Reasons Why", "1.194.756.161", "132.130", "130.528", "Solo"],
["Good For You", "903.798.031", "292.708", "287.605", "Solo"],
["Hands To Myself", "763.837.075", "94.543", "91.468", "Solo"],
["Same Old Love", "761.148.606", "173.383", "169.867", "Solo"],
["Fetish (feat. Gucci Mane)", "682.082.862", "198.639", "198.543", "Solo"],
["Ice Cream (with Selena Gomez)", "649.030.151", "106.529", "102.899", "Solo"],
["The Heart Wants What It Wants", "633.567.337", "137.895", "134.097", "Solo"],
["Kill Em With Kindness", "581.664.325", "39.700", "40.061", "Solo"],
["Bad Liar", "538.879.488", "33.137", "33.046", "Solo"],
["Baila Conmigo (with Rauw Alejandro)", "512.300.518", "49.325", "46.643", "Solo"],
["Come & Get It", "493.487.835", "108.461", "107.709", "Solo"],
["People You Know", "440.564.148", "223.710", "219.915", "Solo"],
["I Want You To Know", "385.559.120", "127.648", "64.759", "Solo"],
["I Can’t Get Enough", "372.719.916", "22.034", "22.524", "Solo"],
["Look At Her Now", "339.051.733", "23.936", "22.385", "Solo"],
["Rare", "305.555.582", "21.040", "21.040", "Solo"],
["Let Somebody Go", "293.174.477", "51.039", "51.039", "Solo"],
["Single Soon", "270.133.438", "42.276", "42.276", "Solo"],
["Slow Down", "200.187.288", "50.417", "50.417", "Solo"],
["Ojos Tristes (with The Marías)", "191.482.935", "277.581", "277.581", "Solo"],
["Feel Me", "188.736.850", "20.051", "20.051", "Solo"],
["Trust Nobody", "183.943.605", "4.412", "4.412", "Solo"],
["Past Life (with Selena Gomez)", "175.376.091", "12.090", "12.090", "Solo"],
["My Mind & Me", "143.111.154", "14.559", "14.559", "Solo"],
["Boyfriend", "139.200.210", "8.355", "8.355", "Solo"],
["Souvenir", "135.247.257", "66.844", "66.844", "Solo"],
["Call Me When You Break Up", "126.315.089", "86.881", "86.881", "Solo"],
["Me & The Rhythm", "125.210.926", "11.695", "11.695", "Solo"],
["Anxiety", "124.884.156", "4.950", "4.950", "Solo"],
["Selfish Love (with Selena Gomez)", "121.356.935", "10.569", "10.569", "Solo"],
["Sober", "109.878.064", "10.438", "10.438", "Solo"],
["De Una Vez", "108.084.129", "7.478", "7.478", "Solo"],
["It Ain't Me (Tiësto Remix)", "102.634.587", "3.082", "3.082", "Solo"],
["Bluest Flame", "89.073.022", "86.704", "86.704", "Solo"],
["Only You", "88.216.789", "5.693", "5.693", "Solo"],
["999 (with Camilo)", "85.985.649", "5.586", "5.586", "Solo"],
["Me & My Girls", "84.155.716", "10.617", "10.617", "Solo"],
["Ring", "79.186.772", "9.841", "9.841", "Solo"],
["Love On", "78.960.531", "14.945", "14.945", "Solo"],
["How Does It Feel To Be Forgotten", "72.836.182", "49.403", "49.403", "Solo"],
["Vulnerable", "70.572.599", "8.311", "8.311", "Solo"],
["Dance Again", "68.803.437", "5.856", "5.856", "Solo"],
["Love Will Remember", "68.533.030", "5.308", "5.308", "Solo"],
["Crowded Room (feat. 6LACK)", "65.641.156", "5.922", "5.922", "Solo"],
["Sunset Blvd", "64.740.890", "48.695", "48.695", "Solo"],
["Perfect", "63.396.903", "6.855", "6.855", "Solo"],
["We Don't Talk Anymore (DROELOE Remix)", "62.696.155", "6.006", "6.006", "Solo"],
["Shake It Up", "51.467.249", "12.827", "12.827", "Solo"],
["Let Me Get Me", "48.079.829", "6.504", "6.504", "Solo"],
["Revival", "47.818.174", "2.629", "2.629", "Solo"],
["Kill Em With Kindness (Acoustic)", "47.473.098", "3.446", "3.446", "Solo"],
["Nobody", "46.295.493", "3.868", "3.868", "Solo"],
["Camouflage", "45.136.153", "2.137", "2.137", "Solo"],
["Tell Me Something I Don't Know (OST)", "44.898.066", "9.641", "9.641", "Solo"],
["A Sweeter Place (feat. Kid Cudi)", "44.096.689", "3.955", "3.955", "Solo"],
["Birthday", "40.929.211", "3.635", "3.635", "Solo"],
["Cut You Off", "37.955.493", "2.967", "2.967", "Solo"],
["Survivors", "34.993.730", "1.791", "1.791", "Solo"],
["Dámelo To’ (feat. Myke Towers)", "34.878.963", "1.532", "1.532", "Solo"],
["Kinda Crazy", "34.271.319", "3.423", "3.423", "Solo"],
["Everything Is Not As It Seems (Series)", "33.054.050", "6.299", "6.299", "Solo"],
["Wizards of Waverly Place Theme", "33.036.195", "6.392", "6.392", "Solo"],
["Scared Of Loving You", "32.654.305", "16.596", "16.596", "Solo"],
["She", "30.939.567", "4.290", "4.290", "Solo"],
["Stars Dance", "29.464.897", "2.929", "2.929", "Solo"],
["Body Heat", "29.112.558", "1.432", "1.432", "Solo"],
["Magic", "28.763.003", "3.962", "3.962", "Solo"],
["Undercover", "28.106.430", "3.163", "3.163", "Solo"],
["Same Old Love Remix", "27.679.901", "3.826", "3.826", "Solo"],
["Like A Champion", "26.871.953", "1.688", "1.688", "Solo"],
["Rise", "26.693.548", "1.246", "1.246", "Solo"],
["Back To You (Joey Pecoraro Remix)", "26.001.364", "634", "634", "Solo"],
["Do It", "25.838.738", "880", "880", "Solo"],
["Fun", "25.127.105", "1.903", "1.903", "Solo"],
["New Classic (Single)", "25.019.061", "8.248", "8.248", "Solo"],
["Younger And Hotter Than Me", "24.339.206", "12.585", "12.585", "Solo"],
["Don’t Wanna Cry", "22.903.921", "16.894", "16.894", "Solo"],
["Adiós", "22.655.440", "2.487", "2.487", "Solo"],
["Save The Day", "19.545.092", "1.454", "1.454", "Solo"],
["We Don't Talk Anymore (Attom Remix)", "18.783.658", "2.424", "2.424", "Solo"],
["Selfish Love (Tiësto Remix)", "18.614.417", "1.179", "1.179", "Solo"],
["Cowboy", "18.015.619", "9.828", "9.828", "Solo"],
["You Said You Were Sorry", "17.756.169", "9.127", "9.127", "Solo"],
["One and the Same", "17.755.549", "3.050", "3.050", "Solo"],
["Buscando Amor", "16.853.245", "1.289", "1.289", "Solo"],
["Vicio", "16.796.795", "1.430", "1.430", "Solo"],
["Don’t Take It Personally", "16.038.629", "7.410", "7.410", "Solo"],
["B.E.A.T.", "15.487.554", "1.373", "1.373", "Solo"],
["Already Missing You", "15.099.239", "590", "590", "Solo"],
["Pick It Up", "15.063.835", "29.484", "29.484", "Solo"],
["Fetish (Galantis Remix)", "14.958.180", "635", "635", "Solo"],
["Cologne", "14.406.386", "1.069", "1.069", "Solo"],
["Bidi Bidi Bom Bom", "14.128.359", "2.124", "2.124", "Solo"],
["We Don't Talk Anymore (Lash Remix)", "14.012.398", "1.319", "1.319", "Solo"],
["Let Somebody Go (Kygo Remix)", "13.875.311", "3.621", "3.621", "Solo"],
["Forget Forever", "13.398.858", "1.363", "1.363", "Solo"],
["Write Your Name", "12.556.519", "973", "973", "Solo"],
["Nobody Does It Like You", "12.402.435", "1.305", "1.305", "Solo"],
["Forget Forever (ST£FAN)", "12.022.250", "313", "313", "Solo"],
["Back To You (Riton Remix)", "11.534.265", "329", "329", "Solo"],
["Hands To Myself (Fareoh)", "11.171.003", "643", "643", "Solo"],
["Hands To Myself (KANDY)", "10.958.302", "1.753", "1.753", "Solo"],
["In The Dark (Nobody Wants This)", "10.844.867", "53.074", "53.074", "Solo"],
["Outta My Hands (Loco)", "10.831.094", "698", "698", "Solo"],
["Kill Em With Kindness (Felix Cartal)", "10.289.374", "308", "308", "Solo"],
["Music Feels Better", "9.618.868", "523", "523", "Solo"],
["Stained", "9.558.453", "5.760", "5.760", "Solo"],
["Lose You To Love Me (Demo)", "9.512.787", "1.744", "1.744", "Solo"],
["Rare (Alexander 23 Edit)", "8.956.949", "299", "299", "Solo"],
["Let Somebody Go (Single)", "8.789.427", "1.335", "1.335", "Solo"],
["Talk", "8.136.383", "7.249", "7.249", "Solo"],
["Do You Wanna Be Perfect", "8.020.802", "2.050", "2.050", "Solo"],
["I Said I Love You First", "7.906.725", "2.471", "2.471", "Solo"],
["Past Life (Lil Mosey Remix)", "7.474.624", "561", "561", "Solo"],
["Good For You (Phantoms)", "7.042.044", "145", "145", "Solo"],
["Wolves (MOTi Remix)", "6.970.181", "816", "816", "Solo"],
["Come & Get It (Jump Smokers)", "6.879.016", "897", "897", "Solo"],
["Let Somebody Go (Piano)", "6.813.427", "1.633", "1.633", "Solo"],
["Same Old Love (Grey Remix)", "6.427.417", "128", "128", "Solo"],
["Cruella De Vil", "6.320.173", "501", "501", "Solo"],
["Good For You (Yellow Claw)", "5.983.122", "567", "567", "Solo"],
["Back To You (Anki Remix)", "5.365.278", "333", "333", "Solo"],
["Let Somebody Go (Ofenbach)", "5.323.810", "562", "562", "Solo"],
["Bang A Drum", "4.864.002", "580", "580", "Solo"],
["Wolves (Said The Sky)", "4.797.919", "1.140", "1.140", "Solo"],
["Selfish Love (Acoustic)", "4.779.406", "305", "305", "Solo"],
["Same Old Love (Borgore)", "4.409.281", "135", "135", "Solo"],
["Call Me When You Break Up (Acoustic)", "4.373.585", "2.623", "2.623", "Solo"],
["Guess You Could Say I’m In Love", "4.290.724", "4.736", "4.736", "Solo"],
["Good For You (Nebbra)", "3.990.491", "99", "99", "Solo"],
["Come & Get It (Dave Audé)", "3.836.347", "227", "227", "Solo"],
["Magical", "3.647.524", "159", "159", "Solo"],
["Lover In Me", "3.334.355", "115", "115", "Solo"],
["Let Somebody Go (Spotify Singles)", "3.239.383", "605", "605", "Solo"],
["Good For You (KASBO)", "2.790.969", "85", "85", "Solo"],
["Kill Em With Kindness (Young Bombs)", "2.675.780", "51", "51", "Solo"],
["Disappear", "2.656.624", "173", "173", "Solo"],
["I Like It That Way", "2.631.037", "109", "100", "Solo"],
["New Classic (Live)", "2.585.232", "618", "618", "Solo"],
["Rare (Live from Village Studio)", "2.415.389", "197", "197", "Solo"],
["We Don't Talk Anymore (Junge Junge)", "2.413.025", "231", "231", "Solo"],
["Come & Get It (Robert DeLong)", "2.351.273", "27", "27", "Solo"],
["That's When I'll Care", "2.192.043", "2.087", "2.087", "Solo"],
["Hands To Myself (Betablock3r)", "2.120.087", "74", "74", "Solo"],
["Selfish Love (Jack Chirak)", "2.076.064", "179", "179", "Solo"],
["Slow Down (Smash Mode)", "2.014.560", "133", "133", "Solo"],
["Same Old Love (Filous)", "1.979.794", "78", "78", "Solo"],
["I Want You To Know (Lophiile)", "1.889.020", "145", "145", "Solo"],
["Trust in Me", "1.840.844", "60", "60", "Solo"],

// --- SELENA GOMEZ & THE SCENE ---
["Love You Like A Love Song", "1.198.438.396", "613.574", "613.574", "Scene"],
["Who Says", "608.375.570", "138.352", "138.352", "Scene"],
["Naturally", "178.039.260", "47.559", "47.559", "Scene"],
["A Year Without Rain", "139.909.932", "40.965", "40.965", "Scene"],
["Hit The Lights", "83.502.883", "19.157", "19.157", "Scene"],
["Round & Round", "74.008.540", "16.659", "16.659", "Scene"],
["Tell Me Something I Don't Know", "54.045.915", "14.401", "14.401", "Scene"],
["My Dilemma 2.0", "30.878.972", "3.470", "3.470", "Scene"],
["Un Año Sin Lluvia", "24.679.190", "10.154", "10.154", "Scene"],
["My Dilemma", "19.585.359", "5.902", "5.902", "Scene"],
["Falling Down", "17.140.098", "2.223", "2.223", "Scene"],
["Bang Bang Bang", "15.991.940", "2.909", "2.909", "Scene"],
["Ghost Of You", "9.421.768", "1.540", "1.540", "Scene"],
["A Year Without Rain (Dave Audé Radio)", "8.993.184", "482", "482", "Scene"],
["We Own The Night", "8.600.182", "1.248", "1.248", "Scene"],
["Naturally (Dave Audé Radio)", "8.495.412", "661", "661", "Scene"],
["Middle Of Nowhere", "8.344.898", "1.746", "1.746", "Scene"],
["I Won't Apologize", "8.225.331", "1.332", "1.332", "Scene"],
["Whiplash", "7.043.298", "1.734", "1.734", "Scene"],
["Más", "6.880.916", "399", "399", "Scene"],
["Off The Chain", "6.287.262", "1.262", "1.262", "Scene"],
["When The Sun Goes Down", "6.244.988", "1.069", "1.069", "Scene"],
["Dices", "6.166.696", "955", "955", "Scene"],
["Sick Of You", "6.108.162", "792", "792", "Scene"],
["Rock God", "5.946.644", "875", "875", "Scene"],
["The Way I Loved You", "5.664.596", "505", "505", "Scene"],
["I Don't Miss You At All", "5.169.100", "594", "594", "Scene"],
["Outlaw", "5.144.745", "740", "740", "Scene"],
["Live Like There's No Tomorrow", "4.423.159", "818", "818", "Scene"],
["Spotlight", "4.347.370", "633", "633", "Scene"],
["Kiss & Tell", "4.313.741", "513", "513", "Scene"],
["Intuition", "4.200.546", "568", "568", "Scene"],
["Summer's Not Hot", "4.044.927", "514", "514", "Scene"],
["That's More Like It", "3.990.705", "587", "587", "Scene"],
["Love You Like A Love Song (Radio Ver)", "3.933.903", "3.536", "3.536", "Scene"],
["Naturally (Radio Edit)", "3.735.004", "795", "795", "Scene"],
["I Promise You", "3.665.763", "529", "529", "Scene"],
["Stop & Erase", "3.366.468", "433", "433", "Scene"],
["More", "2.875.519", "404", "404", "Scene"],
["I Got U", "2.526.157", "341", "341", "Scene"],
["Crush", "2.324.574", "372", "372", "Scene"],
["As A Blonde", "2.258.330", "281", "281", "Scene"],
["Love You Like A Love Song (Alias Mix)", "1.111.085", "303", "303", "Scene"],
["Love You Like a Love Song (Dave Audé Mix)", "842.330", "185", "185", "Scene"],
["Winter Wonderland", "828.667", "213", "213", "Scene"],
["Love You Like a Love Song (Mixin Marc)", "613.172", "218", "218", "Scene"],
["Love You Like a Love Song (Jumpsmokers)", "502.321", "134", "134", "Scene"],
["Round & Round (Dave Audé Radio)", "455.821", "80", "80", "Scene"],
["Naturally (Dave Audé Club)", "386.129", "58", "58", "Scene"],
["LYLALS (Radio Instrumental)", "328.500", "40", "40", "Scene"],
["LYLALS (Dave Audé Club)", "317.263", "44", "44", "Scene"],
["A Year Without Rain (EK's Remix)", "315.707", "44", "44", "Scene"],
["A Year Without Rain (Dave Audé Club)", "308.241", "41", "41", "Scene"],
["LYLALS (Mixin Marc Club)", "274.020", "36", "36", "Scene"],
["LYLALS (Jumpsmokers Club)", "267.954", "16", "16", "Scene"],
["Hit the Lights (Dave Audé Radio)", "258.641", "19", "19", "Scene"],
["A Year Without Rain (Extra)", "246.886", "35", "35", "Scene"],
["LYLALS (DJ Escape Radio)", "241.547", "23", "23", "Scene"],
["Falling Down (Extra)", "202.273", "28", "28", "Scene"],
["LYLALS (DJ Escape Club)", "201.764", "9", "9", "Scene"],
["Naturally (Ralphi Rosario Radio)", "200.807", "26", "26", "Scene"],
["Who Says (Bimbo Jones Radio)", "189.574", "18", "18", "Scene"],
["Who Says (Extra)", "183.982", "22", "22", "Scene"],
["Round & Round (Dave Audé Club)", "179.905", "43", "43", "Scene"],
["Round & Round (Wideboys Radio)", "179.052", "111", "111", "Scene"],
["I Won't Apologize (Extra)", "155.099", "24", "24", "Scene"],
["Who Says (Dave Audé Club)", "145.561", "5", "5", "Scene"],
["Live Like There's No Tomorrow (Extra)", "122.992", "27", "27", "Scene"],
["I Promise You (Extra)", "122.028", "20", "20", "Scene"],
["Naturally (Ralphi Rosario Extended)", "104.199", "3", "3", "Scene"],
["A Year Without Rain (Alias Club)", "103.577", "17", "17", "Scene"],
["Naturally (Disco Fries Remix)", "103.373", "0", "0", "Scene"]
];

let sortMode = 'total';
let currentFilter = 'All';

// FUNÇÃO PARA LIMPAR PONTOS E CONVERTER EM NÚMERO REAL
function toNum(val) {
    if (!val) return 0;
    if (typeof val === 'number') return val;
    return Number(val.toString().replace(/\./g, '').trim()) || 0;
}

function getTarget(total, daily) {
    let step;
    if (daily < 5000) step = 500000;
    else if (daily < 19000) step = 1000000;
    else if (daily < 50000) step = 2000000;
    else step = 5000000;
    return Math.ceil((total + 1) / step) * step;
}

function getLabel(t) {
    if (t >= 1000000000) return (t / 1000000000).toFixed(2).replace('.00', '') + "B";
    return (t / 1000000).toFixed(1).replace('.0', '') + "M";
}

function setSort(m) { sortMode = m; updateUI(); }

function toggleFilter(cat) {
    if (currentFilter === cat) currentFilter = 'All';
    else currentFilter = cat;
    document.getElementById("btnSolo").classList.toggle("active", currentFilter === 'Solo');
    document.getElementById("btnScene").classList.toggle("active", currentFilter === 'Scene');
    updateUI();
}

function updateUI() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const body = document.getElementById("tableBody");
    let dailyTotal = 0; // RESETADO A CADA CICLO PARA EVITAR NÚMEROS ENORMES

    // PROCESSAMENTO SEGURO DOS DADOS
    let data = musicas.map(m => {
        const total = toNum(m[1]);
        const daily = toNum(m[2]);
        const dailyOntem = toNum(m[3]);
        const target = getTarget(total, daily);
        
        // Proteção contra divisão por zero para evitar o NaN na estimativa
        let days = "---";
        if (daily > 0) {
            days = Math.ceil((target - total) / daily);
        }
        
        return { name: m[0], total, daily, dailyOntem, cat: m[4], target, days };
    });

    if (currentFilter !== 'All') data = data.filter(m => m.cat === currentFilter);
    data = data.filter(m => m.name.toLowerCase().includes(search));

    // ORDENAÇÃO
    if (sortMode === 'daily') data.sort((a,b) => b.daily - a.daily);
    else if (sortMode === 'est') {
        data.sort((a,b) => {
            if (a.days === "---") return 1;
            if (b.days === "---") return -1;
            return a.days - b.days;
        });
    }
    else if (sortMode === 'name') data.sort((a,b) => a.name.localeCompare(b.name));
    else data.sort((a,b) => b.total - a.total);

    body.innerHTML = "";
    data.forEach(m => {
        dailyTotal += m.daily;
        let compHTML = "";
        if (m.dailyOntem > 0) {
            const diff = m.daily - m.dailyOntem;
            const perc = ((diff / m.dailyOntem) * 100).toFixed(1);
            if (diff > 0) compHTML = `<br><span style="color:#2ecc71; font-size:0.7rem;">▲ ${perc}%</span>`;
            else if (diff < 0) compHTML = `<br><span style="color:#e74c3c; font-size:0.7rem;">▼ ${Math.abs(perc)}%</span>`;
        }

        body.innerHTML += `<tr>
            <td>${m.name}</td>
            <td class="daily-col number">${m.daily.toLocaleString()}${compHTML}</td>
            <td class="number" style="text-align:right">${m.total.toLocaleString()}</td>
            <td style="text-align:center"><span class="badge-target">${getLabel(m.target)}</span></td>
            <td class="number" style="text-align:right">${m.days === "---" ? "---" : m.days.toLocaleString() + " dias"}</td>
        </tr>`;
    });

    // ATUALIZA OS CARDS DE RESUMO
    document.getElementById("totalDailyStats").innerText = dailyTotal.toLocaleString();
    
    const next = data.filter(x => x.days !== "---").sort((a,b) => a.days - b.days).slice(0, 3);
    document.getElementById("nextMilestone").innerHTML = next.map(n => 
        `<div style="font-size:0.85rem; margin-top:5px;"><b>${n.name}</b> em <b>${n.days} dias</b></div>`
    ).join('');
}

function calcularMeta() {
    const totalAtual = toNum(document.getElementById("calcTotal").value);
    const metaDesejada = toNum(document.getElementById("calcMeta").value);
    const mediaDaily = toNum(document.getElementById("calcMedia").value);
    const boxResultado = document.getElementById("resultadoCalc");

    if(!totalAtual || !metaDesejada || !mediaDaily) {
        boxResultado.style.display = "block";
        boxResultado.innerHTML = "<span style='color:red; font-weight:bold;'>⚠️ Preencha todos os campos!</span>";
        return;
    }

    if(metaDesejada <= totalAtual) {
        boxResultado.style.display = "block";
        boxResultado.innerHTML = "<span style='color:#e67e22; font-weight:bold;'>🎉 Meta alcançada!</span>";
    } else {
        const faltam = metaDesejada - totalAtual;
        const dias = Math.ceil(faltam / mediaDaily);
        boxResultado.style.display = "block";
        boxResultado.innerHTML = `
            <div style="color:var(--ocean); margin-bottom:10px;">Faltam <strong>${faltam.toLocaleString()}</strong> streams.</div>
            <div style="font-size:1.4rem; color:var(--primary);">🚀 Estimativa: <strong>${dias.toLocaleString()} dias</strong></div>
        `;
    }
}
updateUI();
