var primary_menu_list = [
    {
        primary_menu : "Setting & Management - Setting & Management",
        secondary_menu_list: [
            {
                secondary_menu: "Product Management - Product Management",
                left_icon: "./Icons/Group 1383.svg",
                tertiary_menu_list: [
                    {
                        tertiary_menu: "Product Management - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                    {
                        tertiary_menu: "Product Management - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                    {
                        tertiary_menu: "Product Management - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                ]
            },
            {
                secondary_menu: "Preference",
                left_icon: "./Icons/preference_icon.svg",
                tertiary_menu_list: [
                    {
                        tertiary_menu: "Preference - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                    {
                        tertiary_menu: "Preference - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                    {
                        tertiary_menu: "Preference - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                ]
            },
            {
                secondary_menu: "SBU",
                left_icon: "./Icons/Sbu_icon.svg",
            },
            {
                secondary_menu: "Notification",
                left_icon: "./Icons/bell_icon.svg",
            },
            {
                secondary_menu: "Approval Thread",
                left_icon: "./Icons/approval icon.svg",
            },
            {
                secondary_menu: "Aduit Trial",
                left_icon: "./Icons/audit_icon.svg",
            },
            {
                secondary_menu: "Backup & Restore",
                left_icon: "./Icons/backup_icon.svg",
            }
        ]
    },
    {
        primary_menu : "Background Process",
        secondary_menu_list: [
            {
                secondary_menu: "Background Process Secondary",
                left_icon: "./Icons/Group 1383.svg",
            },
            {
                secondary_menu: "Background Process Secondary",
                left_icon: "./Icons/preference_icon.svg",
            },
            {
                secondary_menu: "Background Process Secondary",
                left_icon: "./Icons/Sbu_icon.svg",
            }
        ]
    },
    {
        primary_menu : "Syatem Administrator",
        secondary_menu_list: [
            {
                secondary_menu: "Syatem Administrator Secondary",
                left_icon: "./Icons/Group 1383.svg",
            },
            {
                secondary_menu: "Syatem Administrator Secondary",
                left_icon: "./Icons/preference_icon.svg",
            },
            {
                secondary_menu: "Syatem Administrator Secondary",
                left_icon: "./Icons/Sbu_icon.svg",
            }
        ]
    },
    {
        primary_menu : "User Functionality",
        secondary_menu_list: [
            {
                secondary_menu: "User Functionality Secondary",
                left_icon: "./Icons/Group 1383.svg",
            },
            {
                secondary_menu: "User Functionality Secondary",
                left_icon: "./Icons/preference_icon.svg",
            },
            {
                secondary_menu: "User Functionality Secondary",
                left_icon: "./Icons/Sbu_icon.svg",
            }
        ]
    },
    {
        primary_menu : "Admin Reports",
        secondary_menu_list: [
            {
                secondary_menu: "Admin Reports Secondary",
                left_icon: "./Icons/Group 1383.svg",
            },
            {
                secondary_menu: "Admin Reports Secondary",
                left_icon: "./Icons/preference_icon.svg",
            },
            {
                secondary_menu: "Admin Reports Secondary",
                left_icon: "./Icons/Sbu_icon.svg",
            }
        ]
    },
    {
        primary_menu : "Reference / Glassary",
        secondary_menu_list: [
            {
                secondary_menu: "Reference / Glassary Secondary",
                left_icon: "./Icons/Group 1383.svg",
                tertiary_menu_list: [
                    {
                        tertiary_menu: "Preference - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                    {
                        tertiary_menu: "Preference - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                    {
                        tertiary_menu: "Preference - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                ]
            },
            {
                secondary_menu: "Reference / Glassary Secondary",
                left_icon: "./Icons/preference_icon.svg",
            },
            {
                secondary_menu: "Reference / Glassary Secondary",
                left_icon: "./Icons/Sbu_icon.svg",
                tertiary_menu_list: [
                    {
                        tertiary_menu: "Preference - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                    {
                        tertiary_menu: "Preference - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                    {
                        tertiary_menu: "Preference - Tertiary Menu",
                        left_icon: "./Icons/Group 1383.svg",
                    },
                ]
            }
        ]
    }
]

var arrow_icon_down = "./Icons/chevron-Blue-down.svg";
var arrow_icon_right = "./Icons/chevron-right.svg";
var secondary_ul_flag = true;

/*console.log(primary_menu_list.length);
for(let i=0; i<primary_menu_list.length; i++) {
    // console.log(primary_menu_list[i]);
    if(primary_menu_list[i].secondary_menu_list) {
        // console.log("Secondary menu is present")
        for(let j=0; j<primary_menu_list[i].secondary_menu_list.length; j++) {
            // console.log(primary_menu_list[i].secondary_menu_list[j]);
            if(primary_menu_list[i].secondary_menu_list[j].tertiary_menu_list) {
                for(let k=0; k<primary_menu_list[i].secondary_menu_list[j].tertiary_menu_list.length; k++) {
                    // console.log(primary_menu_list[i].secondary_menu_list[j].tertiary_menu_list[k]);
                }
            } else {
                console.log("Tertiary menu not present");
            }
        }
    } else {
        console.log("Secondary menu is not present");
    }
}*/

// Parent Selector
var selector_sidebar_inner = document.querySelector(".sidebar-inner");

// Menu Section
var menu_section = document.createElement("DIV");
menu_section.className = "menu-section";
selector_sidebar_inner.append(menu_section);

// Primary Menu Create
for(let i=0; i<primary_menu_list.length; i++) {
    // Primary ul
    var primary_menu_ul = document.createElement("ul");
    primary_menu_ul.className = "main-menu-ul";
    menu_section.append(primary_menu_ul);

    // Primary Menu Text
    var primary_menu_text = document.createElement("p");
    primary_menu_text.className = "main-menu-ul-text";
    primary_menu_text.innerText = primary_menu_list[i].primary_menu;
    primary_menu_ul.append(primary_menu_text);

    // Primary menu click event
    primary_menu_text.addEventListener('click', function(e) {
        primaryMenuClickHandler(this);
    });

    // Primary menu hover event
    // primary_menu_text.addEventListener('mouseover', function(e) {
    //     primaryMenuHoverHandler(this);
    // });

    // Primary Menu Arrow Icon
    var primary_menu_arrow_icon = document.createElement("img");
    primary_menu_arrow_icon.className = "primary-arrow-icon";
    primary_menu_arrow_icon.src = arrow_icon_down;
    primary_menu_arrow_icon.alt = "primary arrow icon";
    primary_menu_text.append(primary_menu_arrow_icon);

    // Primary li Create - Secondary Menu
    if(primary_menu_list[i].secondary_menu_list) {
        for(let j=0; j<primary_menu_list[i].secondary_menu_list.length; j++) {
            // Primary li
            var primary_menu_li_secondary_menu = document.createElement("li");
            primary_menu_li_secondary_menu.className = "main-menu-li hide";
            primary_menu_ul.append(primary_menu_li_secondary_menu);
            
            // Secondary menu click event
            primary_menu_li_secondary_menu.addEventListener('click', function(e) {
                SecondaryMenuClickHandler(this);
            });

            // Secondary Menu Left icon
            var secondary_left_icon = document.createElement("img");
            secondary_left_icon.src = primary_menu_list[i].secondary_menu_list[j].left_icon;
            primary_menu_li_secondary_menu.append(secondary_left_icon);

            // Secondary Menu Text
            var secondary_menu_text = document.createElement("span");
            secondary_menu_text.className = "secondary-menu-text";
            secondary_menu_text.innerText = primary_menu_list[i].secondary_menu_list[j].secondary_menu;
            primary_menu_li_secondary_menu.append(secondary_menu_text);

            // Secondary Menu Arrow Icon
            var secondary_menu_right_arrow = document.createElement("img");
            secondary_menu_right_arrow.className = "secondary-arrow-icon"
            secondary_menu_right_arrow.src = arrow_icon_down;
            secondary_menu_right_arrow.alt = "secondary arrow icon";
            primary_menu_li_secondary_menu.append(secondary_menu_right_arrow);

            // Secondary ul - Tertiary list generate
            if(primary_menu_list[i].secondary_menu_list[j].tertiary_menu_list) {
                for(let k=0; k<primary_menu_list[i].secondary_menu_list[j].tertiary_menu_list.length; k++) {
                    // console.log(primary_menu_list[i].secondary_menu_list[j].tertiary_menu_list[k]);
            
                    // Secondary ul
                    // if(secondary_ul_flag) {
                        var secondary_menu_ul = document.createElement("ul");
                        secondary_menu_ul.className = "child-first-ul hide";
                        primary_menu_li_secondary_menu.append(secondary_menu_ul);
                        // secondary_ul_flag = false;
                    // }
                    
                    // Tertiary li
                    var secondary_li_tertiary_menu = document.createElement("li");
                    secondary_li_tertiary_menu.className = "child-first-li";
                    secondary_menu_ul.append(secondary_li_tertiary_menu);

                    // Tertiary Menu Left icon
                    var tertiary_left_icon = document.createElement("img");
                    tertiary_left_icon.src = primary_menu_list[i].secondary_menu_list[j].tertiary_menu_list[k].left_icon;
                    secondary_li_tertiary_menu.append(tertiary_left_icon);
        
                    // Tertiary Menu Text
                    var tertiary_menu_text = document.createElement("span");
                    tertiary_menu_text.className = "tertiary-menu-text";
                    tertiary_menu_text.innerText = primary_menu_list[i].secondary_menu_list[j].tertiary_menu_list[k].tertiary_menu;
                    secondary_li_tertiary_menu.append(tertiary_menu_text);
        
                    // Tertiary Menu Arrow Icon
                    var tertiary_menu_right_arrow = document.createElement("img");
                    tertiary_menu_right_arrow.className = "tertiary-arrow-icon"
                    tertiary_menu_right_arrow.src = arrow_icon_down;
                    tertiary_menu_right_arrow.alt = "tertiary arrow icon";
                    secondary_li_tertiary_menu.append(tertiary_menu_right_arrow);
                    
                }
            }
        }
    }

}

function primaryMenuClickHandler(e) {
    let primary_menu_ul_li_selector = e.parentNode.childNodes;
    for(let i=1; i<primary_menu_ul_li_selector.length; i++) {
        let selectorClassName = primary_menu_ul_li_selector[i].className;
        if(selectorClassName === "main-menu-li hide") {
            primary_menu_ul_li_selector[i].className = "main-menu-li";
        } else {
            primary_menu_ul_li_selector[i].className = "main-menu-li hide";
        }
    }
}

// function primaryMenuHoverHandler(e) {
//     console.log(e.className);
//     console.log(e.lastElementChild);
//     e.className = "main-menu-ul-text hover-effect"
// }

function SecondaryMenuClickHandler(e) {
    let secondary_menu_ul_li_seclector = e.childNodes;
    for(let i=3; i<secondary_menu_ul_li_seclector.length; i++) {
        let selectorClassName = secondary_menu_ul_li_seclector[i].className;
        if(selectorClassName === "child-first-ul hide") {
            secondary_menu_ul_li_seclector[i].className = "child-first-ul";
        } else {
            secondary_menu_ul_li_seclector[i].className = "child-first-ul hide";
        }
    }
}

$(document).ready(function(){
    // console.log("Jquery working");
    // console.log(window.innerWidth);
    // if(window.innerWidth > 1260) {
    //     $(".header .left-section").css("margin-left", "20%");
    // }


    // $(".main-menu-li").click(function(e) {
    //     e.preventDefault();
    //     var text = $(e.target).text();
    //     var element = $(e.target);
    //     var index = $(this).index();
    //     // console.log(text.trim());
    //     // console.log(element.length);
    //     console.log("Secondary : " + $(this).index());
    // });

    // $(".main-menu-li .child-first-li").click(function(e) {
    //     e.preventDefault();
    //     var text = $(e.target).text();
    //     var element = $(e.target);
    //     var index = $(this).index();
    //     // console.log(text.trim());
    //     // console.log(element.length);
    //     console.log("Tertiary : " + $(this).index());
    // });

    // let test = document.getElementsByClassName("child-first-li");
    // if($('.sidebar .menu-section .main-menu-ul-text').is(":hover")) {
    //     console.log("Hover");
    // }

    $('.sidebar .menu-section .main-menu-ul-text').hover(function() {
        // $('.sidebar .menu-section .main-menu-ul-text').css('width', '100%');
        // $('.primary-arrow-icon').css('display', 'none');
            $(this).parent().addClass('primary-menu-text-hover');
            console.log($(this).parent().width());
            $(this).addClass('hover-effect');
            $(this).children().addClass('hide');
            console.log($(this).length);
        },
        function () {
            // $('.sidebar .menu-section .main-menu-ul-text').css('width', '220px');
            // $('.primary-arrow-icon').css('display', 'block');
            $(this).parent().removeClass('primary-menu-text-hover');
            $(this).removeClass('hover-effect');
            $(this).children().removeClass('hide');
        });
});