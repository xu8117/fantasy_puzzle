set PACKAGE_ID=0x2540564cc1ce271bb2f5cca67ac775fc3def2701ba608ed0eb92dfed4ab15a0c
set MODULE=lottery
set FUNC_NAME=endLottery
set GAS_BUDGET=100000000
set LOTTERY=0x9e0ca9082406d9d63545eb8485a78b7404a63e515c5557c66090ea11448a70c5
set SIGNATURE=0xa65dd50f397d8b0b6499d05f2704d26e48e8a6b56887a30e5775a6e704987468871aeee5b0b246436c4929b72dc03066

sui client call --gas-budget %GAS_BUDGET%  --package %PACKAGE_ID% --module %MODULE% --function %FUNC_NAME% --args %LOTTERY% 0x6 %SIGNATURE%









# 获取结束轮次的随机数签名
curl -s https://drand.cloudflare.com/52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971/public/$END_ROUND > output.txt
export SIGNATURE=0x`jq -r '.signature' output.txt`
echo $SIGNATURE

sui client call --function endLottery --package $PACKAGE_ID --module lottery --args $LOTTERY 0x6 $SIGNATURE --gas-budget $GAS_BUDGET
