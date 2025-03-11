/*CMD
  command: BbTonWalletBot.html
  help: 
  need_reply: false
  auto_retry_time: 
  folder: HTML

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="https://my-cdnpro.vercel.app/assets/images/logo.png" type="image/x-icon" />
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <script src="https://telegram.org/js/telegram-web-app.js?56"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.css" />
    <title>BB Wallet - The Best Ton Wallet</title>
    <link href="https://my-cdnpro.vercel.app/assets/css/bbwallet.app.main.css" rel="stylesheet" />
  </head>
  <body>
    <div class="screen fixed inset-0 z-20" id="splashScreen">
      <div class="container bg-n900 h-dvh relative overflow-hidden flex justify-center items-center text-white">
        <div class="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-24 -left-20 blur-[575px]"></div>

        <div class="size-[105px] rounded-full bg-white opacity-5 top-40 -left-14 absolute"></div>
        <div class="size-[105px] rounded-full bg-white opacity-5 top-20 -right-14 absolute"></div>

        <div class="size-[105px] rounded-full bg-white opacity-5 bottom-10 -left-14 absolute"></div>
        <div class="size-[105px] rounded-full bg-white opacity-5 bottom-40 -right-14 absolute"></div>

        <div class="flex flex-col justify-center items-center gap-4 p-8 relative z-20">
          <img src="https://my-cdnpro.vercel.app/assets/images/logo.png" alt="" class="relative z-30" />
          <p class="text-3xl font-bold">BB <span class="text-g300">Wallet</span></p>
        </div>
      </div>
    </div>

    <div id="successScreen" class="hidden screen container bg-n900 min-h-dvh relative overflow-hidden flex justify-center items-center text-white">
      <div class="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
      <div class="relative z-20 flex justify-center items-center flex-col px-6">
        <div class="wave-animation">
          <div class="size-32 rounded-full bg-g300 flex justify-center items-center">
            <i class="ph ph-check relative z-[500] text-6xl text-black"></i>
          </div>
          <div class="waves wave-1"></div>
          <div class="waves wave-2"></div>
          <div class="waves wave-3"></div>
        </div>

        <div class="flex flex-col gap-3 pt-16 text-center">
          <h1 class="text-2xl font-semibold">Transaction Successful</h1>
          <p class="text-sm text-n70 px-6">
            Your TON has been sent successfully! You can track your transaction on the blockchain for confirmation.
          </p>
          <p id="transactionHash" class="text-sm text-g300 font-medium"></p>
        </div>

        <div class="w-full pt-20">
          <button onclick="location.reload()" class="block w-full bg-g300 font-semibold text-center py-3 rounded-lg">
            Continue to Wallet
          </button>
        </div>
      </div>
    </div>

    <div class="hidden screen container bg-n900 relative z-10 overflow-hidden flex justify-start items-start text-white pb-36" id="mainWalletScreen">
      <div class="w-[582px] h-[582px] rounded-full bg-g300/10 absolute -top-48 -left-20 blur-[575px]"></div>
      <div class="relative z-20 w-full">
        <div class="bg-white bg-opacity-5 py-8 px-6 rounded-b-3xl">
          <div class="flex justify-between items-center">
            <div class="flex justify-start items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" id="user-photo" alt="User Photo" class="w-12 h-12 object-cover rounded-full" />
              <p class="text-sm" id="user-greeting">Hello, Welcome</p>
            </div>
            <div class="flex justify-start items-center gap-2">
              <a id="scanButton" class="flex justify-center items-center text-xl p-2 text-g300 rounded-full bg-white bg-opacity-5">
                <i class="ph ph-scan"></i>
              </a>
              <a id="settingButton" class="flex justify-center items-center text-xl p-2 text-g300 rounded-full bg-white bg-opacity-5">
                <i class="ph ph-gear"></i>
              </a>
            </div>
          </div>
          
          <div class="py-8">
            <p class="text-n70 text-sm">Your available balance</p>
            <div class="flex justify-start items-center gap-2">
              <p class="text-[32px] font-bold text-white relative">
                <span class="walletBalance" id="walletBalance">0.000000</span>
                <span class="text-sm font-normal text-g300 absolute top-1 -right-9">TON</span>
              </p>
            </div>
            <p class="text-sm text-n70"><span class="text-g300">$</span><span id="walletBalanceUSD">0.00</span> (USD)</p>
            <div class="my-6 w-full border border-white border-opacity-5 border-dashed"></div>

            <div class="grid grid-cols-2 gap-4">
              <a class="flex flex-col justify-center items-center gap-2 p-3 bg-white bg-opacity-5 rounded-lg shadow-md transition-all hover:bg-opacity-10 hover:shadow-lg hover:-translate-y-1 cursor-pointer" id="sendButton">
                <div class="flex justify-center items-center text-2xl text-green-400">
                  <i class="ph-fill ph-paper-plane-tilt"></i>
                </div>
                <p class="text-white font-medium text-sm">Send</p>
              </a>
              
              <a class="receiveButton flex flex-col justify-center items-center gap-2 p-3 bg-white bg-opacity-5 rounded-lg shadow-md transition-all hover:bg-opacity-10 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div class="flex justify-center items-center text-2xl text-green-400">
                  <i class="ph-fill ph-download-simple"></i>
                </div>
                <p class="text-white font-medium text-sm">Receive</p>
              </a>
            </div>
          </div>
        </div>
        
        <div class="px-6 pt-8">
          <div id="transactionHistoryContainer">
            <p class="text-xl font-semibold">Transaction History</p>
            <div id="transactionHistory" class="flex flex-col gap-4 pt-5">
              <div id="noTransactions" class="flex flex-col justify-center items-center text-center py-10">
                <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="No Transactions" class="w-24 h-24 opacity-50" />
                <p class="text-sm text-n70 mt-5">No transactions found</p>
                <p class="text-sm text-white mt-4">
                  Need some TON? Get free test TON from
                  <a href="https://t.me/testgiver_ton_bot" target="_blank" class="text-g300 underline">testgiver_ton_bot</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="px-6 pt-8">
          <div class="w-full bg-g300 p-5 flex justify-between items-center rounded-xl relative bg-opacity-20 overflow-hidden">
            <div class="text-4xl text-white flex justify-center items-center p-3 rounded-full bg-white bg-opacity-10">
              <i class="ph ph-shield-check"></i>
            </div>
            <div class="max-w-[200px] pl-4">
              <p class="text-xl font-semibold">
                Welcome to BB Wallet!
              </p>
              <p class="text-n70 pt-2 text-xs">
                Your data stays secure and is stored locally on your device. Enjoy fast, private, and seamless transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden screen container bg-n900 h-dvh relative overflow-hidden flex justify-center items-center text-white" id="onboardingScreen">
      <div class="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
      <div class="swiper onboarding-steps-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="p-6 relative z-20">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/ton-coin-security-3d-icon-download-in-png-blend-fbx-gltf-file-formats--lock-secure-shield-digital-stablecoin-cryptocurrency-pack-business-icons-10326805.png?f=webp"
                alt=""
              />
              <div class="pt-8">
                <p class="text-3xl font-bold">
                  Secure &amp; Reliable
                  <span class="text-g300"> Ton Wallet </span> Experience
                </p>
                <p class="text-n70 text-sm pt-5">
                  BB Wallet is the safest and easiest way to store and manage your Ton cryptocurrency.
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="p-6 relative z-20">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ton-coin-wallet-3d-icon-download-in-png-blend-fbx-gltf-file-formats--digital-currency-banking-stablecoin-cryptocurrency-pack-business-icons-10326799.png?f=webp" alt="" />
              <div class="pt-8">
                <p class="text-3xl font-bold">
                  The Best
                  <span class="text-g300">Ton-Only Wallet </span>
                </p>
                <p class="text-n70 text-sm pt-5">
                  BB Wallet is built exclusively for the Ton ecosystem, providing unmatched security and speed.
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="p-6 relative z-20">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/ton-coin-hologram-3d-icon-download-in-png-blend-fbx-gltf-file-formats--technology-cryptocurrency-currency-digital-stablecoin-pack-business-icons-10326798.png?f=webp"
                alt=""
              />
              <div class="pt-8">
                <p class="text-3xl font-bold">
                  Effortless
                  <span class="text-g300"> Ton Transactions </span>
                </p>
                <p class="text-n70 text-sm pt-5">
                  Send, receive, and store Ton coins with BB Wallet's simple and intuitive interface.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center w-full px-6">
          <div class="swiper-pagination onBoardingsliderPagingation"></div>
          <div class="nextButton">
            <div class="ara-next">
              <button class="text-white flex justify-center items-center bg-g300 rounded-full text-2xl p-4">
                <i class="ph ph-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden screen container bg-n900 relative z-10 overflow-hidden flex justify-start items-start text-white pb-36" id="writePhraseScreen">
      <div class="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
      <div class="px-6 py-8 relative z-20">
        <div class="flex justify-center items-center flex-col gap-4 pt-8">
          <h1 class="text-3xl font-bold text-center">Secure Your Wallet Backup</h1>
          <p class="text-n70 text-base text-center leading-relaxed">
            Your seed phrase is the key to your wallet. Write it down and store it safely.
            <br />
            <span class="text-g300 font-medium">Anyone with this phrase can access your wallet.</span>
          </p>
        </div>

        <div class="border border-white border-opacity-5 border-dashed w-full mt-8"></div>

        <div class="mt-8 p-7 bg-white bg-opacity-5 rounded-xl flex flex-col justify-center items-center text-center showSeedList">
          <h3 class="font-semibold text-xl">Reveal Your Secret Phrase</h3>
          <p class="text-n70 text-sm pt-3">
            Make sure no one else can see your screen. This phrase should be kept private at all times.
          </p>
          <button class="bg-g300 text-n900 py-2 px-6 rounded-md flex justify-center items-center gap-2 mt-5 showSeedListButton hover:bg-g400 transition">
            <i class="ph ph-eye"></i>
            View Seed Phrase
          </button>
        </div>

        <ul id="seedPhraseList" class="hidden grid grid-cols-3 gap-2 pt-8 seedList"></ul>

        <div class="w-full pt-20">
          <button id="nextButton" class="block bg-g300 font-semibold text-center py-3 rounded-lg w-full hover:bg-g400 transition">
            Continue to Wallet
          </button>
        </div>
      </div>
    </div>

    <div class="hidden screen container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white" id="receiveScreen">
      <div class="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
      <div class="px-6 py-8 relative z-20 w-full">
        <div class="flex justify-start items-center pb-8 mr-8">
          <button class="goBackButton flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
            <i class="ph-bold ph-caret-left"></i>
          </button>
          <div class="flex justify-center items-center w-full">
            <h1 class="font-semibold text-2xl">Receive TON</h1>
          </div>
        </div>
        <div class="flex justify-center items-center pt-12">
          <img id="qrCode" alt="Wallet QR Code" class="rounded-xl border-4 border-white shadow-lg" />
        </div>

        <p class="text-sm text-n70 text-center pt-4">
          Share your wallet address to receive TON. Make sure you only receive funds on the TON network.
        </p>

        <div class="flex justify-center items-center gap-2 pt-6">
          <div class="flex justify-center items-center gap-1 py-2 px-4 bg-white bg-opacity-5 rounded-md">
            <p class="walletAddress text-xs text-n70">Loading address...</p>
            <i id="copyAddress" class="ph ph-copy text-g300 cursor-pointer"></i>
          </div>
          <button id="shareAddress">
            <i class="ph ph-share-network text-g300 p-2 bg-white bg-opacity-5 rounded-md"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="hidden screen container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white" id="sendScreen">
      <div class="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div class="px-6 py-8 relative z-20 w-full">
        <div class="flex justify-start items-center pb-8 mr-8">
          <button class="goBackButton flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
            <i class="ph-bold ph-caret-left"></i>
          </button>
          <div class="flex justify-center items-center w-full">
            <h1 class="font-semibold text-2xl">Send TON</h1>
          </div>
        </div>
        
        <div class="flex flex-col gap-6 pt-12">
          <div class="">
            <p class="text-sm font-semibold pb-2">From</p>
            <a class="w-full flex justify-between items-center gap-6 border border-white border-opacity-5 bg-white bg-opacity-5 p-4 rounded-xl">
              <div class="flex justify-start items-center gap-3">
                <img src="https://ton.org/download/ton_symbol.png" alt="TON Logo" class="w-12 h-12" />
                <div class="">
                  <p class="walletAddress font-semibold"></p>
                  <p class="text-n70 text-sm">Balance: <span class="walletBalance"></span> <span class="text-g300">(TON)</span></p>
                </div>
              </div>
            </a>
          </div>
          
          <div class="flex flex-col">
            <label for="recipientAddress" class="text-sm font-semibold pb-2">Recipient Address</label>
            <input type="text" id="recipientAddress" placeholder="Enter wallet address" class="p-3 bg-white bg-opacity-5 rounded-md text-white placeholder:text-n70 outline-none" />
          </div>
          
          <div class="flex flex-col">
            <label for="sendAmount" class="text-sm font-semibold pb-2">Amount (TON)</label>
            <input type="number" id="sendAmount" placeholder="Enter amount" class="p-3 bg-white bg-opacity-5 rounded-md text-white placeholder:text-n70 outline-none" />
          </div>
          
          <button id="sendTransactionButton" class="w-full py-3 bg-g300 font-semibold rounded-md hover:bg-opacity-90 transition-all">
            Send TON
          </button>
          
          <p id="transactionStatus" class="text-center text-sm pt-4 hidden"></p>
        </div>
      </div>
    </div>
    
    <!-- <script src="./assets/js/main.js"></script> -->
    <script src="https://my-cdnpro.vercel.app/assets/js/bbwallet.app.main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js"></script>
  </body>
</html>

