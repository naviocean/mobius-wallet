import { all } from 'redux-saga/effects';

import watchAccountSaga from './sagas/watchAccount';
import submitTransactionSaga from './sagas/submitTransaction';
import loadCurrencyPricesSaga from './sagas/assetPrices';
import { loginSaga, signupFinishSaga, signupStartSaga } from './sagas/auth';

export default function* rootSaga() {
  yield all([
    loadCurrencyPricesSaga,
    loginSaga,
    signupFinishSaga,
    signupStartSaga,
    submitTransactionSaga,
    watchAccountSaga,
  ]);
}
