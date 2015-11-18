var calculateWorth = function() {
    // Date related
    var today = new Date();
    var time_to_years = 1000*3600*24*365;

    // Maintenance intervals
    var interval_maint_main = 2;
    var interval_maint_container = 2;
    if (age_reserve > 14) {
        interval_maint_container = 1;
    }
    var interval_maint_reserve = 1;
    var interval_maint_aad = 4;

    // Max ages
    var max_age_main = 20;
    var max_age_container = 20;
    var max_age_reserve = 20;
    var max_age_aad = 12;
    
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

    // Ages of components
    var age_container = Math.max(0,today.getTime() - dom_container.getTime())/time_to_years;
    var age_main = Math.max(0,today.getTime() - dom_main.getTime())/time_to_years;
    var age_reserve = Math.max(0,today.getTime() - dom_reserve.getTime())/time_to_years;
    var age_aad = Math.max(0,today.getTime() - dom_aad.getTime())/time_to_years;

    // Relative worth from age
    var worth_container_relative = Math.max(0,Math.min(1,(max_age_container-age_container)/max_age_container));
    var worth_main_relative = Math.max(0,Math.min(1,(max_age_main-age_main)/max_age_main));
    var worth_reserve_relative = Math.max(0,Math.min(1,(max_age_reserve-age_reserve)/max_age_reserve));
    var worth_aad_relative = Math.max(0,Math.min(1,(max_age_aad-age_aad)/max_age_aad));

    // Next maintenance dates
    var check_container = new Date($("#container-next-maint").val());
    var check_main = new Date($("#main-next-maint").val());
    var check_reserve = new Date($("#reserve-next-maint").val());
    var check_aad = new Date($("#aad-next-maint").val());

    // Years till maintenance
    var years_to_maint_container = Math.max(0,check_container.getTime() - today.getTime())/time_to_years;
    var years_to_maint_main = Math.max(0,check_main.getTime() - today.getTime())/time_to_years;
    var years_to_maint_reserve = Math.max(0,check_reserve.getTime() - today.getTime())/time_to_years;
    var years_to_maint_aad = Math.max(0,check_aad.getTime() - today.getTime())/time_to_years;

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

    // Prices reduction due to use
    var lines_wear = 1.0-(lines_max_jumps-lines_jumps)/lines_max_jumps;
    lines_wear = Math.max(0,Math.min(1,lines_wear));
    // Final price of current lines
    var worth_lines = lines*(1.0-lines_wear);
    var main_wear = 1.0-(main_jumps_max-main_jumps)/main_jumps_max;
    main_wear = Math.max(0,Math.min(1,main_wear));

    // Prices of components if not maintained, takes into account the age
    var container_without_extra = container - maint_container;
    // Reduce price of new line set from the price of new main
    var main_without_lines = main-lines;
    // Reduce price reduction caused by wear from the main without lines
    var main_without_wear = main_without_lines*(1.0-main_wear);
    // Reduce price of maintenance
    var main_without_extra = main_without_wear - maint_main;
    var reserve_without_extra = reserve - maint_reserve;
    var aad_without_extra = aad - maint_aad;

    // Worth of current maintenance level
    var worth_maint_container_relative = (1.0-(interval_maint_container-years_to_maint_container)/interval_maint_container);
    worth_maint_container_relative = Math.min(1,Math.max(0,worth_maint_container_relative));
    var worth_maint_container = worth_maint_container_relative*maint_container;

    var worth_maint_main_relative = (1.0-(interval_maint_main-years_to_maint_main)/interval_maint_main);
    worth_maint_main_relative = Math.min(1,Math.max(0,worth_maint_main_relative));
    var worth_maint_main = worth_maint_main_relative*maint_main;

    var worth_maint_reserve_relative = (1.0-(interval_maint_reserve-years_to_maint_reserve)/interval_maint_reserve);
    worth_maint_reserve_relative = Math.min(1,Math.max(0,worth_maint_reserve_relative));
    var worth_maint_reserve = worth_maint_reserve_relative*maint_reserve;

    var worth_maint_aad_relative = (1.0-(interval_maint_aad-years_to_maint_aad)/interval_maint_aad);
    worth_maint_aad_relative = Math.min(1,Math.max(0,worth_maint_aad_relative));
    var worth_maint_aad = worth_maint_aad_relative*maint_aad;

    // Calculate worth of components
    var worth_main = Math.round( main_without_extra * worth_main_relative + worth_lines + worth_maint_main);
    var worth_reserve = Math.round( reserve_without_extra * worth_reserve_relative + worth_maint_reserve);
    var worth_container = Math.round( container_without_extra * worth_container_relative + worth_maint_container);
    var worth_aad = Math.round( Math.max(100, (aad_without_extra + worth_maint_aad) * worth_aad_relative));

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
});
