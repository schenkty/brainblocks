/* @flow */
/* @jsx jsxDom */

import { jsxDom } from 'xcomponent/src/lib';

export function buttonTemplate({ props } : { props : Object }) : HTMLElement {

    let currency = '';
    let amount = '';

    if (props.payment.currency === 'drops') {

        function hasDrops(num) {
            num = parseInt(num) / 1000;
            return num > Math.floor(num)
        }

        amount = hasDrops(props.payment.amount)
            ? (parseInt(props.payment.amount) / 1000000).toFixed(6)
            : (parseInt(props.payment.amount) / 1000000).toFixed(3);
    }
    return (
        <div class="brainblocks-button-container">
            <style>
                {`
                    .brainblocks-button {
                        display: inline-block;
                        width: 100%;
                        height: 50px;
                        background-color: #eee;
                        border-radius: 20px;
                        font-family: Helvetica, Arial, sans-serif;
                        line-height: 50px;
                        color: #1A3238;
                        cursor: pointer;
                        font-size: 16px;
                        text-align: center;
                        letter-spacing: 1px;
                    }

                    .brainblocks-button-content {
                        width: 100%;
                        height: 50px;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    .brainblocks-button .currency-logo {
                        height: 20px;
                        float: left;
                        padding-right: 15px;
                        border-right: 2px solid #ccc;
                    }

                    .brainblocks-button .pay-text {
                        margin-left: 15px;
                    }

                    .brainblocks-button .pay-amount {
                        font-weight: bold;
                    }

                    .brainblocks-button .pay-currency {
                        font-weight: bold;
                    }

                    @media screen and (max-width: 299px) {
                        .brainblocks-button .pay-text {
                            display: none;
                        }
                    }

                    @media screen and (max-width: 200px) {
                        .brainblocks-button .brainblocks-currency-logo {
                            display: none;
                        }

                        .brainblocks-button .brainblocks-currency-logo-small {
                            display: inline-block;
                        }
                    }
                `}
            </style>

            <div role="button" class="brainblocks-button">
                <div class="brainblocks-button-content">
                    <img class="currency-logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODUwIDIwMDAiIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9Ijc1IiB4Mj0iMTkyNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMxMWFhZTIiLz48c3RvcCBvZmZzZXQ9Ii41OSIgc3RvcC1jb2xvcj0iIzA4ODBiNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxNjE5NyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMjk3LjkzIDUzLjgxYy0xMzEuNDEgNzcuMi0yMDkuMjIgMjE2LjYxLTIwOS4yMiAzNjMuNjIgMCA3Ny4yIDMxIDE1NSA2OS44MSAyMjQuNDEgMzEgNjIgNDYuMiAxNzAuMjEtNjIgMjI0LjQxLTc3LjIxIDQ2LjItMTc4LjIyIDE1LjQtMjI0LjQyLTYyLTQ2LjIxLTYyLTEwMC40MS0xMjQtMTcwLjIyLTE3MC4yMS0xMzEuNDEtNzcuMi0yODYuNDMtNzcuMi00MTcuODUgMFM3NSA4NTEgNzUgOTk4LjA1czc3LjIxIDI4Ni40MSAyMDkgMzYzLjgyYzEzMS40MSA3Ny4yIDI4Ni40MyA3Ny4yIDQxNy44NSAwIDY5LjgxLTM4LjggMTI0LTEwMC40IDE2Mi40Mi0xNzAuMjEgMzEtNTQuMiAxMTYuMjEtMTI0IDIyNC40Mi02MiA3Ny4yMSA0Ni4yIDEwMC40MSAxNDcuMjEgNjIgMjI0LjQxLTM4LjggNjkuOC02MiAxNDcuMjEtNjIgMjI0LjQxIDAgMTQ3LjIxIDc3LjIxIDI4Ni40MSAyMDkuMjIgMzYzLjYyIDEzMS40MSA3Ny4yIDI4Ni40MyA3Ny4yIDQxNy44NSAwUzE5MjUgMTcyNS40OSAxOTI1IDE1NzguNDhzLTc3LjQxLTI4Ni40MS0yMDkuMjItMzYzLjgyYy02OS44MS0zOC44LTE0Ny4yMi01NC4yLTIzMi4yMy01NC4yLTY5LjgxIDAtMTYyLjQyLTQ2LjItMTYyLjQyLTE2Mi40MSAwLTkzIDY5LjgxLTE2Mi40MSAxNjIuNDItMTYyLjQxIDc3LjIxIDAgMTYyLjQyLTE1LjQgMjMyLjIzLTU0LjJDMTg0Ny4xOSA3MDQuMjQgMTkyNSA1NjQuODMgMTkyNSA0MTcuODNzLTc3LjQxLTI4Ni40MS0yMDkuMjItMzYzLjYyYy02Mi0zOC44LTEzOS4yMi01NC4yLTIwOS01NC4yLTY5LjQxLS40LTE0Ny4yMiAxNS40LTIwOC44MiA1My44IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzUpIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+" />
                    <span>
                        <span class="pay-text">{ amount && 'Pay ' }</span>
                        <span>
                            <span id="pay-amount" class="pay-amount">{ amount || <img class="loading-spinner" src="data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI1cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNzguNzUgMTYuMThWMS41NmE2NC4xIDY0LjEgMCAwIDEgNDcuNyA0Ny43SDExMS44YTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3LTMzLjA4ek0xNi40MyA0OS4yNUgxLjhhNjQuMSA2NC4xIDAgMCAxIDQ3LjctNDcuN1YxNi4yYTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3IDMzLjA3em0zMy4wNyA2Mi4zMnYxNC42MkE2NC4xIDY0LjEgMCAwIDEgMS44IDc4LjVoMTQuNjNhNDkuOTggNDkuOTggMCAwIDAgMzMuMDcgMzMuMDd6bTYyLjMyLTMzLjA3aDE0LjYyYTY0LjEgNjQuMSAwIDAgMS00Ny43IDQ3Ljd2LTE0LjYzYTQ5Ljk4IDQ5Ljk4IDAgMCAwIDMzLjA4LTMzLjA3eiIgZmlsbD0iIzgxY2RmMSIgZmlsbC1vcGFjaXR5PSIxIi8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209Ii05MCA2NCA2NCIgdG89IjAgNjQgNjQiIGR1cj0iNDAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9nPjwvc3ZnPg==" /> }</span>
                            <span> </span>
                            <span id="pay-currency" class="pay-currency">XRP</span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
