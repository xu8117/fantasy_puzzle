set PACKAGE_ID=0x2540564cc1ce271bb2f5cca67ac775fc3def2701ba608ed0eb92dfed4ab15a0c
set MODULE=lottery
set FUNC_NAME=startLottery
set GAS_BUDGET=100000000

set END_ROUND=9495697

set TICKET_PRICE=100

set LOTTERY_DURATION=1800000


sui client call --gas-budget %GAS_BUDGET%  --package %PACKAGE_ID% --module %MODULE% --function %FUNC_NAME% --args %END_ROUND% %TICKET_PRICE% %LOTTERY_DURATION% 0x6


# 获取drand随机源当前轮次
export BASE_ROUND=`curl -s https://drand.cloudflare.com/52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971/public/latest | jq .round`
echo $BASE_ROUND

# 结束轮次为30分钟后的轮次
export END_ROUND=$((BASE_ROUND + 20 * 30))

# 结束时间，30分钟对应的毫秒数
export LOTTERY_DURATION=$((60 * 30 * 1000))
