"use strict";$(document).ready(function(){var a="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";$(".box").each(function(){$(this).hasClass("active")||$(this).hide()}),$("body").css("height",$(window).height()),$(".btn.buy").on("click",function(){$(".buy-action").addClass("animated fadeOut").one(a,function(){$(this).hide().removeClass("animated fadeOut"),$(".validation").addClass("animated fadeIn").show()})}),$(".close-modal").on("click",function(){$(".validation").removeClass("animated fadeIn").hide(),$(".buy-action").show()}),$("#plan-list li").on("click",function(){if(!$(this).hasClass("active")){$("#plan-list li").removeClass("active"),$(this).addClass("active");var a=$(this).data("plan");$(".box.active").removeClass("active").hide(),$(".box[data-box="+a+"]").addClass("animated fadeInUp active").show()}})});