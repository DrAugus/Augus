# 房贷

**等额本金**是指每期还款金额固定，但每期偿还的本金不同，利息逐渐减少的一种还款方式，每期偿还本金相同，利息逐渐减少，所以每月还款额也逐渐减少。

>每期偿还本金 = 贷款本金 ÷ 还款期数  
>第n期偿还利息 = 剩余贷款 x 贷款利率  
>每期还款金额 = 每期偿还本金 + 第n期偿还利息  
>每月利息=(贷款本金－已还本金)×月利率  
>总利息=每月利息之和

**等额本息**是指每期还款金额固定，每期还款金额包括本金和利息，每期偿还的本息金额相同的一种还款方式，每月还款额相同，由于每期偿还的本金不同，总利息收入单调递减。
>每期还款金额 = (贷款本金 x 贷款月利率 x (1+贷款月利率)^贷款月数) / ((1+贷款月利率)^贷款月数 -1)  
>每月利息=贷款本金×月利率×(1－(还款月序号－1)÷贷款月数)  
>总利息=每月利息×贷款月数－贷款本金

## 房贷计算

<Mortgage></Mortgage>

<script setup>
import Mortgage from '../.vitepress/components/live/Mortgage.vue'
</script>