const fs = require('fs');

const htmlPath = 'public/index.html';
let content = fs.readFileSync(htmlPath, 'utf8');

const newSections = `
    <!-- ── VIP CLUB ── -->
    <section id="sec-vip" class="page-section" style="display: none;">
      <div class="banner" style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(205, 127, 50, 0.05)); border: 1px solid rgba(255,215,0,0.2);">
        <h1 class="banner-title text-yellow">VIP Club</h1>
        <p>Unlock exclusive rewards, faster withdrawals, and a personal account manager.</p>
      </div>
      <div style="padding:20px; max-width:800px; margin:0 auto;">
        <div class="stat-card" style="margin-bottom:20px; flex-direction:column; align-items:flex-start; border: 1px solid rgba(255,215,0,0.3); background: rgba(25,25,35,0.8);">
          <h2 style="margin-top:0; color: #fff;">Your VIP Status</h2>
          <div style="font-size:2rem; font-weight:bold; color:var(--gold); margin-bottom:15px; text-transform: uppercase; letter-spacing: 2px;" id="vipCurrentTier">Bronze</div>
          <div style="width:100%; background:var(--bg-lighter); height:12px; border-radius:6px; overflow:hidden; margin-bottom:8px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);">
            <div id="vipProgressBar" style="height:100%; width:0%; background:linear-gradient(90deg, var(--gold), #ffdf00); box-shadow: 0 0 10px rgba(255,215,0,0.5); transition: width 1s ease;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; width:100%; font-size:0.9rem; color:var(--text-muted); font-weight: 500;">
            <span id="vipCurrentWager">₨0 wagered</span>
            <span id="vipNextTier">Next Tier: Silver (₨10,000)</span>
          </div>
        </div>
        <div class="game-grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));">
          <div class="stat-card" style="flex-direction:column; text-align:center;">
            <div class="stat-icon" style="background:linear-gradient(45deg,#cd7f32,#e6a87c); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">🥉</div>
            <h3>Bronze</h3>
            <p class="text-sm text-muted">0 - 9,999 PKR<br>Basic Support</p>
          </div>
          <div class="stat-card" style="flex-direction:column; text-align:center;">
            <div class="stat-icon" style="background:linear-gradient(45deg,#c0c0c0,#ececec); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">🥈</div>
            <h3>Silver</h3>
            <p class="text-sm text-muted">10K - 99K PKR<br>2% Cashback</p>
          </div>
          <div class="stat-card" style="flex-direction:column; text-align:center;">
            <div class="stat-icon text-gold">🥇</div>
            <h3>Gold</h3>
            <p class="text-sm text-muted">100K - 499K PKR<br>5% Cashback</p>
          </div>
          <div class="stat-card" style="flex-direction:column; text-align:center;">
            <div class="stat-icon purple">💎</div>
            <h3>Diamond</h3>
            <p class="text-sm text-muted">500K+ PKR<br>10% Cashback</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── TRANSACTIONS ── -->
    <section id="sec-transactions" class="page-section" style="display: none;">
      <div class="banner">
        <h1 class="banner-title text-green">Transaction History</h1>
        <p>View your past deposits and withdrawals.</p>
      </div>
      <div style="padding:20px;">
        <div style="display:flex; gap:10px; margin-bottom:20px; overflow-x:auto;">
          <button class="btn btn-primary" id="btnTxAll" onclick="loadTransactions('all')">All</button>
          <button class="btn btn-ghost" id="btnTxDep" onclick="loadTransactions('deposits')">Deposits</button>
          <button class="btn btn-ghost" id="btnTxWit" onclick="loadTransactions('withdrawals')">Withdrawals</button>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="transactionsBody">
              <tr><td colspan="5" class="table-empty">Loading...</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ── SETTINGS ── -->
    <section id="sec-settings" class="page-section" style="display: none;">
      <div class="banner">
        <h1 class="banner-title text-muted">Settings</h1>
        <p>Manage your account preferences and security.</p>
      </div>
      <div style="padding:20px; max-width:600px; margin:0 auto;">
        <div class="stat-card" style="flex-direction:column; align-items:stretch;">
          <h3>Profile Information</h3>
          <form id="settingsForm" style="margin-top:15px; display:flex; flex-direction:column; gap:15px;" onsubmit="saveSettings(event)">
            <div class="form-group">
              <label>Username</label>
              <input type="text" id="setUname" class="input" placeholder="Your username" required>
            </div>
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" id="setFullName" class="input" placeholder="e.g. John Doe">
            </div>
            <button type="submit" class="btn btn-primary w-full" id="btnSaveSettings">Save Changes</button>
          </form>
        </div>
      </div>
    </section>

    <!-- ── LIVE SUPPORT ── -->
    <section id="sec-customer" class="page-section" style="display: none;">
      <div class="banner">
        <h1 class="banner-title text-yellow">Live Support</h1>
        <p>We're here to help you 24/7.</p>
      </div>
      <div style="padding:20px; display:flex; flex-wrap:wrap; gap:20px;">
        <div style="flex:1; min-width:300px;">
          <div class="stat-card" style="flex-direction:column; align-items:stretch; height:400px; background: rgba(25,25,35,0.7); border: 1px solid rgba(255,255,255,0.1);">
            <div style="padding-bottom:10px; border-bottom:1px solid var(--border); margin-bottom:10px; font-weight:bold; display: flex; align-items: center; gap: 10px;">
              <span class="text-green">●</span> Live Chat Agent
            </div>
            <div id="chatMessages" style="flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:10px; padding-right:5px; margin-bottom:10px;">
              <div style="background:var(--primary); padding:10px 15px; border-radius:15px 15px 15px 0; align-self:flex-start; max-width:80%; color:#fff;">
                Hello! Welcome to AVAITOR Support. How can we help you today?
              </div>
            </div>
            <div style="display:flex; gap:10px;">
              <input type="text" id="chatInput" class="input" placeholder="Type a message..." style="flex:1;" onkeypress="if(event.key==='Enter') sendChatMessage()">
              <button class="btn btn-primary" onclick="sendChatMessage()">Send</button>
            </div>
          </div>
        </div>
        <div style="flex:1; min-width:300px; display:flex; flex-direction:column; gap:20px;">
          <div class="stat-card" style="flex-direction:column; align-items:flex-start;">
            <h3>Frequently Asked Questions</h3>
            <div style="margin-top:15px; width:100%;">
              <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                <p style="font-weight:bold; margin-bottom:5px;">How long do withdrawals take?</p>
                <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">Usually processed within 15-30 minutes. Crypto is faster.</p>
              </div>
              <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                <p style="font-weight:bold; margin-bottom:5px;">What is the minimum deposit?</p>
                <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">The minimum deposit is ₨100. Minimum withdrawal is ₨500.</p>
              </div>
              <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px;">
                <p style="font-weight:bold; margin-bottom:5px;">Is KYC mandatory?</p>
                <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">KYC is only required for withdrawals over ₨50,000.</p>
              </div>
            </div>
          </div>
          <div class="stat-card" style="flex-direction:column; align-items:flex-start; background: linear-gradient(135deg, rgba(230, 0, 0, 0.1), transparent);">
            <h3>Contact Email</h3>
            <p style="color:var(--text-muted); margin-top:5px; font-size: 1.1rem; font-weight:bold;">support@avaitor.com</p>
          </div>
        </div>
      </div>
    </section>
`;

const kycModal = `
<!-- KYC Modal -->
<div class="modal-overlay" id="kycModal" onclick="if(event.target===this) closeModal('kycModal')">
  <div class="modal">
    <div class="modal-header">
      <h2>Identity Verification (KYC)</h2>
      <button class="close-btn" onclick="closeModal('kycModal')">×</button>
    </div>
    <div style="margin-bottom:15px; color:var(--text-muted); font-size:0.9rem;">
      Upload a valid government-issued ID to verify your identity. This helps secure your account.
    </div>
    <form id="kycForm" onsubmit="submitKyc(event)">
      <div class="form-group">
        <label>Document Type</label>
        <select class="input" id="kycDocType" required>
          <option value="cnic">CNIC / ID Card</option>
          <option value="passport">Passport</option>
          <option value="license">Driver's License</option>
        </select>
      </div>
      <div class="form-group">
        <label>Upload Document Front Image</label>
        <div style="border: 2px dashed var(--border); padding: 20px; text-align: center; border-radius: 8px; cursor: pointer; background: rgba(255,255,255,0.02);" onclick="document.getElementById('kycFrontFile').click()">
          <span style="font-size:2rem; opacity:0.5;">📄</span>
          <p style="margin:10px 0 0 0; color:var(--text-muted); font-size:0.85rem;">Click to browse or drag and drop</p>
        </div>
        <input type="file" id="kycFrontFile" style="display:none;" accept="image/*" required>
      </div>
      <div class="form-group" style="margin-top:15px;">
        <button type="submit" class="btn btn-primary w-full" id="kycSubmitBtn">Submit for Verification</button>
      </div>
    </form>
  </div>
</div>
`;

if (!content.includes('sec-vip')) {
  content = content.replace('</main>', newSections + '\n  </main>');
  content = content.replace('</body>', kycModal + '\n</body>');
  fs.writeFileSync(htmlPath, content);
  console.log('Injected sections successfully.');
} else {
  console.log('Sections already injected.');
}
