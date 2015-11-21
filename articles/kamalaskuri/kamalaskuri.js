var today = new Date();
var time_to_years = 1000*3600*24*365;
var today = new Date();

var calculateAgeInYears = function(date) {
    return Math.max(0,today.getTime() - date.getTime())/time_to_years;
}

var calculateTimeTillYears = function(date) {
    return Math.max(0,date.getTime() - today.getTime())/time_to_years;
}

var calculateRelativeWorth = function(age,max_age) {
    return Math.max(0,Math.min(1,(max_age-age)/max_age));
}

var caluclateItemWorth = function(worth_without_extra, worth_extra, worth_relative, use_lines_and_maint_aging) {
    if (use_lines_and_maint_aging) {
        var worth = Math.round( (worth_without_extra + worth_extra) * worth_relative);
    } else {
        var worth = Math.round( worth_without_extra * worth_relative + worth_extra);
    }

    return worth;
}

var calculateWorthMaintenance = function(price_maint, years_to_maint, interval_maint)
{
    var worth_maint_relative = calculateRelativeWorth(interval_maint-years_to_maint, interval_maint);
    var worth_maint = worth_maint_relative*price_maint;
    return worth_maint;
}

var calculateWorthContainer = function(price, price_maint, age_years, years_to_maint, use_lines_and_maint_aging)
{
    var max_age = 20;
    var interval_maint = 2;
    if (age_years > 2) {
        interval_maint = 1;
    }
    
    var worth_relative = calculateRelativeWorth(age_years,max_age);
    var without_extra = price - price_maint;
    
    var worth_maint = calculateWorthMaintenance(price_maint, years_to_maint, interval_maint);

    return caluclateItemWorth(without_extra, worth_maint, worth_relative, use_lines_and_maint_aging);
}

var calculateWorthMain = function(price, price_maint, price_lines,
                                age_years, years_to_maint,
                                lines_jumps, lines_max_jumps,
                                main_jumps, main_max_jumps,
                                use_lines_and_maint_aging)
{
    var max_age = 20;
    var interval_maint = 2;

    var worth_relative = calculateRelativeWorth(age_years,max_age);
    var lines_condition = calculateRelativeWorth(lines_jumps,lines_max_jumps);
    var main_condition = calculateRelativeWorth(main_jumps, main_max_jumps);
    
    var worth_lines = price_lines*lines_condition;
    var main_without_lines_and_maint = price - price_lines - price_maint;
    var main_without_wear = main_without_lines_and_maint*main_condition;
    var without_extra = main_without_wear;

    var worth_maint = calculateWorthMaintenance(price_maint + worth_lines, years_to_maint, interval_maint);

    return caluclateItemWorth(without_extra, worth_maint, worth_relative, use_lines_and_maint_aging);
}

var calculateWorthReserve = function(price, price_maint, age_years, years_to_maint, use_lines_and_maint_aging) {
    var max_age = 20;
    var interval_maint = 2;
    if (age_years > 2) {
        interval_maint = 1;
    }

    var worth_relative = calculateRelativeWorth(age_years,max_age);
    var without_extra = price - price_maint;

    var worth_maint = calculateWorthMaintenance(price_maint, years_to_maint, interval_maint);

    return caluclateItemWorth(without_extra, worth_maint, worth_relative, use_lines_and_maint_aging);
}

var calculateWorthAad = function(price, price_maint, age_years, years_to_maint, use_lines_and_maint_aging) {
    var max_age = 12;
    var interval_maint = 4;

    var worth_relative = calculateRelativeWorth(age_years,max_age);
    var without_extra = price - price_maint;

    var worth_maint = calculateWorthMaintenance(price_maint, years_to_maint, interval_maint);

    return Math.max(100,caluclateItemWorth(without_extra, worth_maint, worth_relative, use_lines_and_maint_aging));
}

var calculateWorth = function() {
    // Prices of components
    var container = parseInt(($("#container-price").val()));
    var main = parseInt($("#main-price").val());
    var reserve = parseInt($("#reserve-price").val());
    var aad = parseInt($("#aad-price").val());

    // Manufacturing dates
    var dom_container = new Date($("#container-dom").val());
    var dom_main = new Date($("#main-dom").val());
    var dom_reserve = new Date($("#reserve-dom").val());
    var dom_aad = new Date($("#aad-dom").val());

    var age_reserve = calculateAgeInYears(dom_reserve);
    var age_main = calculateAgeInYears(dom_main);
    var age_container = calculateAgeInYears(dom_container);
    var age_container = calculateAgeInYears(dom_container);
    var age_aad = calculateAgeInYears(dom_aad);

    // Next maintenance dates
    var check_container = new Date($("#container-next-maint").val());
    var check_main = new Date($("#main-next-maint").val());
    var check_reserve = new Date($("#reserve-next-maint").val());
    var check_aad = new Date($("#aad-next-maint").val());

    // Years till maintenance
    var years_to_maint_container = calculateTimeTillYears(check_container);
    var years_to_maint_main = calculateTimeTillYears(check_main);
    var years_to_maint_reserve = calculateTimeTillYears(check_reserve);
    var years_to_maint_aad = calculateTimeTillYears(check_aad);

    // Prices of maintenance
    var maint_container = parseInt(($("#container-maint-price").val()));
    var maint_main = parseInt(($("#main-maint-price").val()));
    var maint_reserve = parseInt(($("#reserve-maint-price").val()));
    var maint_aad = parseInt(($("#aad-maint-price").val()));

    // Prices of lines and other
    var lines = parseInt(($("#lines-change-price").val()));
    var lines_max_jumps = parseInt(($("#lines-max-jumps").val()));
    var lines_jumps = parseInt(($("#lines-jumps").val()));
    var main_jumps = parseInt(($("#main-jumps").val()));
    var main_jumps_max = parseInt(($("#main-max-jumps").val()));

    var use_lines_and_maint_aging = $("input:radio[name=lines-and-maint-aging]:checked").val() == "aging";

    var worth_main = calculateWorthMain(main, maint_main, lines, 
        age_main, years_to_maint_main,
        lines_jumps, lines_max_jumps,
        main_jumps, main_jumps_max,
        use_lines_and_maint_aging);
    var worth_reserve = calculateWorthReserve(reserve, maint_reserve,
        age_reserve, years_to_maint_reserve, use_lines_and_maint_aging);
    var worth_container = calculateWorthContainer(container, maint_container,
        age_container, years_to_maint_container, use_lines_and_maint_aging);
    var worth_aad = calculateWorthAad(aad, maint_aad,
        age_aad, years_to_maint_aad, use_lines_and_maint_aging);
    
    $("#container-worth").val(worth_container);    
    $("#aad-worth").val(worth_aad);
    $("#main-worth").val(worth_main);
    $("#reserve-worth").val(worth_reserve);
    $("#total-worth").val(worth_main + worth_aad + worth_container + worth_reserve);
    $("#total-price").val(container + main + reserve + aad);
};

$(document).ready(function() {
    var today = new Date();
    var day = ("0" + today.getDate()).slice(-2);
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var year = today.getFullYear();

    $("#container-dom").val(year + "-" + month + "-" + day);
    $("#main-dom").val(year + "-" + month + "-" + day);
    $("#reserve-dom").val(year + "-" + month + "-" + day);
    $("#aad-dom").val(year + "-" + month + "-" + day);

    $("#container-next-maint").val(year+2 + "-" + month + "-" + day);
    $("#main-next-maint").val(year+2 + "-" + month + "-" + day);
    $("#reserve-next-maint").val(year+2 + "-" + month + "-" + day);
    $("#aad-next-maint").val(year+4 + "-" + month + "-" + day);

    calculateWorth();
    $("input").change(calculateWorth);
});
