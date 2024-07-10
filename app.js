const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click",(e)=>{
    console.log("ทำการคลิก")
    coupon.select()
    coupon.setSelectionRange(0,999999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = "คัดลอกเเล้ว!!"
    setTimeout(()=>{
        btn.textContent = "คัดลอก"
    },3000)
})