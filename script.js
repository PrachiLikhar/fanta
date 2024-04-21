var tl = gsap.timeline({scrollTrigger:{
    trigger: ".section",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top:"155%",
    left: "7%"
}, 'orange')

tl.to("#org-slice",{
    top:"135%",
    left: "22%"
}, 'orange')

tl.to("#leaf1",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"120%",
    rotate:"60deg",
    left: "30%"
}, 'orange')
tl.to("#leaf3",{
    width: "15%",
    top:"130%",
    left: "30%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".cards",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from("#lemon-slice",{
    
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{

    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from("#apple-slice",{
   
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
   
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#org-slice",{
    width:"18%",
    left: "42%",
    top: "242%"
    
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "260%",
    left: "33%",
}, 'ca')
