// 台北日照估算；不需定位權限或外部服務。
(function () {
    const radians = Math.PI / 180;
    function schedule(now = new Date()) {
        const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Taipei', year: 'numeric', month: 'numeric', day: 'numeric'
        }).formatToParts(now).map(part => [part.type, part.value]));
        const midnight = Date.UTC(+parts.year, +parts.month - 1, +parts.day) - 8 * 3600000;
        const day = Math.floor((Date.UTC(+parts.year, +parts.month - 1, +parts.day) - Date.UTC(+parts.year, 0, 0)) / 86400000);
        const angle = 2 * Math.PI / 365 * (day - 1);
        const equation = 229.18 * (0.000075 + 0.001868 * Math.cos(angle) - 0.032077 * Math.sin(angle)
            - 0.014615 * Math.cos(2 * angle) - 0.040849 * Math.sin(2 * angle));
        const declination = 0.006918 - 0.399912 * Math.cos(angle) + 0.070257 * Math.sin(angle)
            - 0.006758 * Math.cos(2 * angle) + 0.000907 * Math.sin(2 * angle)
            - 0.002697 * Math.cos(3 * angle) + 0.00148 * Math.sin(3 * angle);
        const latitude = 25.033 * radians;
        const hourAngle = Math.acos(Math.cos(90.833 * radians) / (Math.cos(latitude) * Math.cos(declination))
            - Math.tan(latitude) * Math.tan(declination)) / radians;
        const noon = 720 - 4 * 121.5654 - equation + 480;
        const sunrise = Math.round(midnight + (noon - 4 * hourAngle) * 60000);
        const sunset = Math.round(midnight + (noon + 4 * hourAngle) * 60000);
        return { sunrise, sunset };
    }
    function automatic(now = new Date()) {
        const { sunrise, sunset } = schedule(now);
        return now.getTime() >= sunrise && now.getTime() < sunset ? 'sky' : 'night';
    }
    function nextBoundary(now = new Date()) {
        const { sunrise, sunset } = schedule(now);
        if (+now < sunrise) return sunrise;
        if (+now < sunset) return sunset;
        return schedule(new Date(+now + 86400000)).sunrise;
    }
    let override;
    try { override = JSON.parse(localStorage.getItem('themeOverride')); } catch (e) {}
    function current() {
        return override && override.until > Date.now() && ['sky', 'night'].includes(override.theme)
            ? override.theme : automatic();
    }
    window.resumeTheme = {
        current,
        schedule,
        automatic,
        nextBoundary,
        choose(theme) {
            override = { theme, until: nextBoundary() };
            try { localStorage.setItem('themeOverride', JSON.stringify(override)); } catch (e) {}
        }
    };
    document.documentElement.setAttribute('data-theme', current());
})();
