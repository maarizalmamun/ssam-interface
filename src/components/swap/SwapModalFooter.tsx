import { Trade } from '@uniswap/sdk'
import React, { useContext, useMemo, useState } from 'react'
import { Repeat } from 'react-feather'
import { Text } from 'rebass'
import { ThemeContext } from 'styled-components'
import { TYPE } from 'theme'

import {
  computeTradePriceBreakdown,
  formatExecutionPrice,
  warningSeverity
} from '../../utils/prices'
import { ButtonError } from '../Button'
import { AutoColumn } from '../Column'
import { AutoRow, RowBetween, RowFixed } from '../Row'
import { StyledBalanceMaxMini, SwapCallbackError } from './styleds'

export default function SwapModalFooter({
  trade,
  onConfirm,
  allowedSlippage,
  swapErrorMessage,
  disabledConfirm
}: {
  trade: Trade
  allowedSlippage: number
  onConfirm: () => void
  swapErrorMessage: string | undefined
  disabledConfirm: boolean
}) {
  const [showInverted, setShowInverted] = useState<boolean>(false)
  const theme = useContext(ThemeContext)
  const { priceImpactWithoutFee } = useMemo(() => computeTradePriceBreakdown(trade), [trade])
  const severity = warningSeverity(priceImpactWithoutFee)

  return (
    <>
      <AutoColumn gap="0px">
        <RowBetween align="center">
          <Text fontWeight={400} fontSize={14} color={theme.text2}>
            Price
          </Text>
          <Text
            fontWeight={500}
            fontSize={14}
            color={theme.text1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              textAlign: 'right',
              paddingLeft: '10px'
            }}
          >
            {formatExecutionPrice(trade, showInverted)}
            <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
              <Repeat size={14} />
            </StyledBalanceMaxMini>
          </Text>
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={theme.text2}>
            {'Validator: '}
            </TYPE.black>
          </RowFixed>
        </RowBetween>
        <RowBetween>
<<<<<<< HEAD
        <TYPE.black fontSize={12}>
              {"0xa5e7f4a06080b860d376871ce0798aa7677e7a4b117a5bd0909"}
        </TYPE.black>
        </RowBetween>
        <RowBetween>
          <TYPE.black fontSize={12}>
              {"f15fee02f28a62388496982c133fef1eba087d8a06005"}
          </TYPE.black>
=======
          <RowFixed>
            <TYPE.black color={theme.text2} fontSize={14} fontWeight={400}>
              Transaction Fee
            </TYPE.black>
            <QuestionHelper text="This is the fee paid to the Ethereum network for staking ETH." />
          </RowFixed>
          {true ? '$36.79' : <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />}
>>>>>>> 484415c7e84ccb146065dfef5166a0acd3b5b448
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={theme.text2}>
            {'Balance: '}
            </TYPE.black>
          </RowFixed>
          <RowFixed>
            <TYPE.black fontSize={14}>
              {"ETH (NaN ETH to go"}
            </TYPE.black>
          </RowFixed>
<<<<<<< HEAD
=======
          <TYPE.black fontSize={14}>{realizedLPFee ? `10%` : `10%`}</TYPE.black>
>>>>>>> 484415c7e84ccb146065dfef5166a0acd3b5b448
        </RowBetween>
      </AutoColumn>

      <AutoRow>
        <ButtonError
          onClick={onConfirm}
          disabled={disabledConfirm}
          error={severity > 2}
          style={{ margin: '10px 0 0 0' }}
          id="confirm-swap-or-send"
        >
          <Text fontSize={20} fontWeight={500}>
            {severity > 2 ? 'Stake Anyway' : 'Confirm Stake'}
          </Text>
        </ButtonError>

        {swapErrorMessage ? <SwapCallbackError error={swapErrorMessage} /> : null}
      </AutoRow>
    </>
  )
}
