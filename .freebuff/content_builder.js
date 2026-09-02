var fs = require("fs");
var path = require("path");

// Helper to append content to a page file
function appendToPage(filePath, contentLines) {
  var c = fs.readFileSync(filePath, 'utf8');
  var marker = '\n// PAGE_CONTENT_BELOW\n';
  var idx = c.indexOf(marker);
  if (idx >= 0) {
    var before = c.substring(0, idx);
    var after = c.substring(idx + marker.length);
    c = before + '\n' + contentLines.join('\n') + '\n' + after;
  } else {
    // Insert before the closing tags
    var insertBefore = '      </main>';
    idx = c.indexOf(insertBefore);
    if (idx >= 0) {
      c = c.substring(0, idx) + contentLines.join('\n') + '\n' + c.substring(idx);
    }
  }
  fs.writeFileSync(filePath, c);
}

// ============================================================
// WHAT IS BOCCIA PAGE
// ============================================================
appendToPage('app/boccia/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <div className="prose prose-lg max-w-none">',
  '              <h2 className="text-[28px] font-bold text-forest mb-6">What is Boccia?</h2>',
  '              <p className="text-[15px] text-text-secondary leading-relaxed mb-4">',
  '                Boccia (<strong>/ˈbɒtʃə/</strong>, BOTCH-uh) is a precision ball sport, similar to bocce, and related to bowls and petanque. The name "boccia" is derived from the Latin word for "boss" — bottia. The sport is contested at local, national and international levels by athletes with severe physical disabilities.',
  '              </p>',
  '              <p className="text-[15px] text-text-secondary leading-relaxed mb-4">',
  '                Originally designed to be played by people with cerebral palsy, Boccia now includes athletes with other severe disabilities affecting motor skills. In 1984, it became a Paralympic sport and as of 2020, 75 boccia national organizations have joined one or more of the international organizations.',
  '              </p>',
  '              <p className="text-[15px] text-text-secondary leading-relaxed mb-8">',
  '                Boccia is governed by the Boccia International Sports Federation (BISFed) since 2013 and is one of two Paralympic sports (along with goalball) that have no counterpart in the Olympic program.',
  '              </p>',
  '            </div>',
  '          </div>',
  '        </section>',
  '',
  '        <section className="py-16 bg-ivory border-t border-border">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-6">How the Game Works</h2>',
  '            <p className="text-[15px] text-text-secondary leading-relaxed mb-6">',
  '              The aim of the game is to throw leather balls — coloured red or blue — as close as they can to a white target ball, or jack. The jack is thrown first, then the first two regular balls are played, after which the side furthest away from the jack goes next.',
  '            </p>',
  '            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">',
  '              <div className="rounded-xl bg-white border border-border p-6">',
  '                <h3 className="text-[18px] font-bold text-forest mb-3">Individual</h3>',
  '                <p className="text-[14px] text-text-secondary">4 ends, 6 balls per player per end</p>',
  '              </div>',
  '              <div className="rounded-xl bg-white border border-border p-6">',
  '                <h3 className="text-[18px] font-bold text-forest mb-3">Pairs</h3>',
  '                <p className="text-[14px] text-text-secondary">4 ends, 6 balls per pair per end (3 per player)</p>',
  '              </div>',
  '              <div className="rounded-xl bg-white border border-border p-6">',
  '                <h3 className="text-[18px] font-bold text-forest mb-3">Team</h3>',
  '                <p className="text-[14px] text-text-secondary">6 ends, 6 balls per team per end (2 per player)</p>',
  '              </div>',
  '              <div className="rounded-xl bg-white border border-border p-6">',
  '                <h3 className="text-[18px] font-bold text-forest mb-3">Tie-Break</h3>',
  '                <p className="text-[14px] text-text-secondary">One additional end is played if scores are equal</p>',
  '              </div>',
  '            </div>',
  '          </div>',
  '        </section>',
  '',
  '        <section className="py-16 bg-white border-t border-border">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-6">Pronunciation & Origin</h2>',
  '            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">',
  '              <div className="rounded-xl bg-ivory border border-border p-6 text-center">',
  '                <p className="text-[24px] font-bold text-forest mb-2">/ˈbɒtʃə/</p>',
  '                <p className="text-[14px] text-text-muted">BOTCH-uh</p>',
  '              </div>',
  '              <div className="rounded-xl bg-ivory border border-border p-6 text-center">',
  '                <p className="text-[24px] font-bold text-forest mb-2">Latin</p>',
  '                <p className="text-[14px] text-text-muted">From "bottia" meaning boss</p>',
  '              </div>',
  '              <div className="rounded-xl bg-ivory border border-border p-6 text-center">',
  '                <p className="text-[24px] font-bold text-forest mb-2">1984</p>',
  '                <p className="text-[14px] text-text-muted">Paralympic debut</p>',
  '              </div>',
  '            </div>',
  '          </div>',
  '        </section>',
]);

console.log('Boccia page populated');


// ============================================================
// CLASSIFICATION PAGE
// ============================================================
appendToPage('app/classification/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-6">Who Can Play Boccia?</h2>',
  '            <p className="text-[15px] text-text-secondary leading-relaxed mb-6">',
  '              <strong>Anyone can play boccia!</strong> For recreational play, Boccia is inclusive by design — children, adults, older persons, people with or without disabilities, wheelchair users, students, rehabilitation participants, families and support workers can all enjoy the sport.',
  '            </p>',
  '            <p className="text-[15px] text-text-secondary leading-relaxed mb-6">',
  '              For competitive Para Boccia at national and international level, athletes must have a disability and be in a wheelchair as a result of cerebral palsy or another neurological condition that has similar effects, such as muscular dystrophy or traumatic brain injury.',
  '            </p>',
  '            <div className="rounded-xl bg-gold/10 border border-gold/30 p-6 mb-8">',
  '              <p className="text-[14px] font-bold text-forest mb-2">Important Distinction</p>',
  '              <p className="text-[14px] text-text-secondary">Recreational eligibility and official competitive eligibility are different. Diagnosis does NOT automatically determine classification. An athlete must go through a formal classification process.</p>',
  '            </div>',
  '          </div>',
  '        </section>',
  '',
  '        <section className="py-16 bg-ivory border-t border-border">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-8">Sport Classes</h2>',
  '            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">',
  '              {[',
  '                { cls: "BC1", title: "Cerebral Palsy - Hand/Foot", desc: "Severe impairment affecting all four limbs. Limited functional range of motion and coordination. May need power wheelchair. Can throw with hands or kick with feet. May have a Sport Assistant on court.", color: "forest" },',
  '                { cls: "BC2", title: "Cerebral Palsy - Independent", desc: "Severe impairment affecting all four limbs. Strong grip and release of ball. Not eligible for an on-court assistant.", color: "dark-green" },',
  '                { cls: "BC3", title: "Ramp Athletes", desc: "Very severe impairment in all four limbs. Unable to throw consistently. Uses ramp and pointer with Ramp Operator assistance. Operator keeps back to court and eyes averted.", color: "gold" },',
  '                { cls: "BC4", title: "Muscle Power Impairment", desc: "Severe locomotor dysfunction of all four extremities plus poor trunk control. Has enough strength to throw consistently. Not eligible for an on-court assistant.", color: "bronze" },',
  '              ].map((c) => (',
  '                <div key={c.cls} className="rounded-xl bg-white border border-border p-6 hover:shadow-md transition-all">',
  '                  <div className="flex items-center gap-3 mb-4">',
  '                    <span className={"inline-block rounded-lg bg-" + c.color + "/10 px-4 py-2 text-[18px] font-bold text-" + c.color}>{c.cls}</span>',
  '                  </div>',
  '                  <h3 className="text-[16px] font-bold text-forest mb-2">{c.title}</h3>',
  '                  <p className="text-[14px] text-text-secondary leading-relaxed">{c.desc}</p>',
  '                </div>',
  '              ))}',
  '            </div>',
  '          </div>',
  '        </section>',
]);

console.log('Classification page populated');


// ============================================================
// COURT PAGE
// ============================================================
appendToPage('app/court/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-6">Official Court</h2>',
  '            <p className="text-[15px] text-text-secondary leading-relaxed mb-8">',
  '              Boccia is played on a court measuring <strong>12.5m x 6m</strong> (41 ft x 20 ft) with 2m of empty, in-bounds, playable space around it. The surface is flat and smooth — typically a converted wooden basketball or volleyball court, but sometimes a hard turf surface.',
  '            </p>',
  '            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">',
  '              <div className="rounded-xl bg-ivory border border-border p-6 text-center">',
  '                <p className="text-[28px] font-bold text-forest mb-1">12.5m</p>',
  '                <p className="text-[12px] text-text-muted uppercase tracking-wider">Court Length</p>',
  '              </div>',
  '              <div className="rounded-xl bg-ivory border border-border p-6 text-center">',
  '                <p className="text-[28px] font-bold text-forest mb-1">6m</p>',
  '                <p className="text-[12px] text-text-muted uppercase tracking-wider">Court Width</p>',
  '              </div>',
  '              <div className="rounded-xl bg-ivory border border-border p-6 text-center">',
  '                <p className="text-[28px] font-bold text-forest mb-1">6</p>',
  '                <p className="text-[12px] text-text-muted uppercase tracking-wider">Throwing Boxes</p>',
  '              </div>',
  '            </div>',
  '            <h3 className="text-[20px] font-bold text-forest mb-4">Court Markings</h3>',
  '            <ul className="space-y-3 text-[15px] text-text-secondary">',
  '              <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-gold mt-2 shrink-0" />The throwing area is divided into six rectangular throwing boxes in which athletes must stay completely within during play.</li>',
  '              <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-gold mt-2 shrink-0" />A V-shaped line marks over which the jack must cross for the throw to be valid.</li>',
  '              <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-gold mt-2 shrink-0" />A cross marks the position where the jack must be placed if it touches or crosses the boundary line.</li>',
  '              <li className="flex items-start gap-3"><span className="h-2 w-2 rounded-full bg-gold mt-2 shrink-0" />The "dead ball container" holds balls thrown outside the time limit or area of play.</li>',
  '            </ul>',
  '          </div>',
  '        </section>',
]);

console.log('Court page populated');


// ============================================================
// BALLS PAGE
// ============================================================
appendToPage('app/court/balls/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-6">Boccia Balls</h2>',
  '            <p className="text-[15px] text-text-secondary leading-relaxed mb-8">',
  '              Each set contains <strong>13 balls</strong>: 6 red, 6 blue, and 1 white jack. The balls are made of leather and are slightly larger than a tennis ball. They are available in different grades of softness and hardness, selected purposefully to execute desired strategies within a match.',
  '            </p>',
  '            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">',
  '              <div className="rounded-xl bg-white border border-border p-6">',
  '                <h3 className="text-[18px] font-bold text-forest mb-4">Ball Specifications</h3>',
  '                <ul className="space-y-3 text-[14px] text-text-secondary">',
  '                  <li className="flex justify-between border-b border-border-light pb-2"><span>Weight</span><span className="font-semibold text-forest">205-220g</span></li>',
  '                  <li className="flex justify-between border-b border-border-light pb-2"><span>Circumference</span><span className="font-semibold text-forest">270-280mm</span></li>',
  '                  <li className="flex justify-between border-b border-border-light pb-2"><span>Diameter</span><span className="font-semibold text-forest">~86mm</span></li>',
  '                  <li className="flex justify-between"><span>Material</span><span className="font-semibold text-forest">Leather</span></li>',
  '                </ul>',
  '              </div>',
  '              <div className="rounded-xl bg-white border border-border p-6">',
  '                <h3 className="text-[18px] font-bold text-forest mb-4">Ball Behaviour</h3>',
  '                <ul className="space-y-3 text-[14px] text-text-secondary">',
  '                  <li className="flex items-start gap-2"><span className="text-gold mt-1">●</span><span><strong>Soft balls</strong> — absorb impact, roll less, good for blocking</span></li>',
  '                  <li className="flex items-start gap-2"><span className="text-forest mt-1">●</span><span><strong>Medium balls</strong> — balanced play, versatile</span></li>',
  '                  <li className="flex items-start gap-2"><span className="text-bronze mt-1">●</span><span><strong>Hard balls</strong> — roll further, good for knock-offs</span></li>',
  '                </ul>',
  '              </div>',
  '            </div>',
  '          </div>',
  '        </section>',
]);

console.log('Balls page populated');

// ============================================================
// COMPETITION FORMATS PAGE
// ============================================================
appendToPage('app/competition/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-6">Competition Formats</h2>',
  '            <p className="text-[15px] text-text-secondary leading-relaxed mb-8">',
  '              Boccia competitions are organized across three formats: Individual, Pairs, and Team. Each format has specific requirements for athlete numbers, ends, and ball allocation.',
  '            </p>',
  '            <div className="overflow-x-auto">',
  '              <table className="w-full text-[14px] border border-border rounded-xl overflow-hidden">',
  '                <thead className="bg-forest text-white">',
  '                  <tr>',
  '                    <th className="px-4 py-3 text-left font-bold">Format</th>',
  '                    <th className="px-4 py-3 text-left font-bold">Athletes</th>',
  '                    <th className="px-4 py-3 text-left font-bold">Ends</th>',
  '                    <th className="px-4 py-3 text-left font-bold">Balls/Team</th>',
  '                    <th className="px-4 py-3 text-left font-bold">Time Limit</th>',
  '                  </tr>',
  '                </thead>',
  '                <tbody className="divide-y divide-border">',
  '                  <tr className="bg-ivory"><td className="px-4 py-3 font-semibold text-forest">Individual</td><td className="px-4 py-3">1 per side</td><td className="px-4 py-3">4</td><td className="px-4 py-3">6</td><td className="px-4 py-3">4 min end / 2 min remaining</td></tr>',
  '                  <tr className="bg-white"><td className="px-4 py-3 font-semibold text-forest">Pairs</td><td className="px-4 py-3">2 per side</td><td className="px-4 py-3">4</td><td className="px-4 py-3">6 (3 each)</td><td className="px-4 py-3">4 min end / 2 min remaining</td></tr>',
  '                  <tr className="bg-ivory"><td className="px-4 py-3 font-semibold text-forest">Team</td><td className="px-4 py-3">3 per side</td><td className="px-4 py-3">6</td><td className="px-4 py-3">6 (2 each)</td><td className="px-4 py-3">6 min end / 2 min remaining</td></tr>',
  '                </tbody>',
  '              </table>',
  '            </div>',
  '            <p className="text-[13px] text-text-muted mt-4">In pair and team events, a reserve player is allowed. One substitution per game is permitted between ends.</p>',
  '          </div>',
  '        </section>',
]);

console.log('Competition page populated');

// ============================================================
// HOW IT WORKS PAGE
// ============================================================
appendToPage('app/boccia/how-it-works/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-6">The Six-Step Game Flow</h2>',
  '            <p className="text-[15px] text-text-secondary leading-relaxed mb-8">',
  '              Each end follows a precise sequence. The objective is simple: finish with more balls closer to the jack than your opponent.',
  '            </p>',
  '            <div className="space-y-4">',
  '              {[',
  '                { step: "1", title: "Receive the Jack", desc: "The referee gives the jack to the player designated by the coin toss." },',
  '                { step: "2", title: "Deliver a Valid Jack", desc: "The jack must cross the V-line and end up in the target box area to be valid." },',
  '                { step: "3", title: "Play First Coloured Ball", desc: "The player who delivered the jack throws the first coloured ball (red or blue)." },',
  '                { step: "4", title: "Opponent Responds", desc: "The opponent plays their first ball, trying to get closer to the jack." },',
  '                { step: "5", title: "Farther Side Continues", desc: "The side with balls farther from the jack continues until they are closest or run out of balls." },',
  '                { step: "6", title: "Measure and Score", desc: "The referee measures distances and awards points — one point per ball closer to the jack than the opponent\'s nearest." },',
  '              ].map((s) => (',
  '                <div key={s.step} className="flex items-start gap-4 rounded-xl bg-ivory border border-border p-5">',
  '                  <div className="h-10 w-10 rounded-full bg-forest flex items-center justify-center text-white font-bold shrink-0">{s.step}</div>',
  '                  <div>',
  '                    <h3 className="text-[16px] font-bold text-forest mb-1">{s.title}</h3>',
  '                    <p className="text-[14px] text-text-secondary">{s.desc}</p>',
  '                  </div>',
  '                </div>',
  '              ))}',
  '            </div>',
  '          </div>',
  '        </section>',
]);

console.log('How it Works page populated');

// ============================================================
// SCORING PAGE
// =========================================

// ============================================================
// SCORING PAGE
// ============================================================
appendToPage('app/boccia/scoring/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-6">Scoring in Boccia</h2>',
  '            <p className="text-[15px] text-text-secondary leading-relaxed mb-6">',
  '              At the end of each end, the referee measures the distance of the balls closest to the jack and awards points — one point for each ball that is closer to the jack than the opponent\'s closest ball.',
  '            </p>',
  '            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">',
  '              <div className="rounded-xl bg-ivory border border-border p-6">',
  '                <h3 className="text-[18px] font-bold text-forest mb-3">How Points Work</h3>',
  '                <ul className="space-y-2 text-[14px] text-text-secondary">',
  '                  <li className="flex items-start gap-2"><span className="text-gold mt-1">●</span>The side with balls closer to the jack scores all points for that end</li>',
  '                  <li className="flex items-start gap-2"><span className="text-gold mt-1">●</span>If balls are equidistant, the point is not awarded</li>',
  '                  <li className="flex items-start gap-2"><span className="text-gold mt-1">●</span>Maximum possible score per end depends on the format</li>',
  '                </ul>',
  '              </div>',
  '              <div className="rounded-xl bg-ivory border border-border p-6">',
  '                <h3 className="text-[18px] font-bold text-forest mb-3">Special Situations</h3>',
  '                <ul className="space-y-2 text-[14px] text-text-secondary">',
  '                  <li className="flex items-start gap-2"><span className="text-gold mt-1">●</span>If the jack goes out of bounds, the end is replayed</li>',
  '                  <li className="flex items-start gap-2"><span className="text-gold mt-1">●</span>If scores are tied after all ends, one additional end is played</li>',
  '                  <li className="flex items-start gap-2"><span className="text-gold mt-1">●</span>Dead balls are removed from play</li>',
  '                </ul>',
  '              </div>',
  '            </div>',
  '          </div>',
  '        </section>',
]);
console.log('Scoring populated');

// ============================================================
// ACTION PATHWAY
// ============================================================
appendToPage('app/about/action-pathway/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-8">The JPBA Action Pathway</h2>',
  '            <div className="space-y-6">',
  '              {[{ stage: "DISCOVER", desc: "District demonstrations through schools, hospitals, rehabilitation centres and disability networks.", icon: "🔍" },',
  '                { stage: "EQUIP", desc: "Providing balls, training targets, ramps and accessible venue partnerships.", icon: "📦" },',
  '                { stage: "DEVELOP", desc: "Athlete-centred coaching, referee education and classification literacy programs.", icon: "📈" },',
  '                { stage: "COMPETE", desc: "State calendar, data management, safeguarding and transparent selection.", icon: "🏆" },',
  '                { stage: "CONNECT", desc: "Building partnerships with BSFI, government, CSR, health, education and media.", icon: "🤝" }].map((s, i) => (',
  '                <div key={s.stage} className="flex items-start gap-5 rounded-xl bg-ivory border border-border p-6 hover:shadow-md transition-all">',
  '                  <div className="text-3xl">{s.icon}</div>',
  '                  <div className="flex-1">',
  '                    <div className="flex items-center gap-3 mb-2">',
  '                      <span className="inline-block rounded-lg bg-forest/10 px-3 py-1 text-[12px] font-bold text-forest uppercase tracking-wider">Step {i + 1}</span>',
  '                      <h3 className="text-[18px] font-bold text-forest">{s.stage}</h3>',
  '                    </div>',
  '                    <p className="text-[14px] text-text-secondary leading-relaxed">{s.desc}</p>',
  '                  </div>',
  '                </div>',
  '              ))}',
  '            </div>',
  '          </div>',
  '        </section>',
]);
console.log('Action Pathway populated');

// ============================================================
// 90-DAY PLAN
// ============================================================
appendToPage('app/about/90-day-plan/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-8">JPBA 90-Day Development Plan</h2>',
  '            <div className="space-y-8">',
  '              {[{ phase: "MAP", days: "Days 1-30", color: "forest", items: ["District leads", "Athlete mapping", "Venue assessment", "Clinician partnerships", "Equipment procurement", "Safeguarding protocols"] },',
  '                { phase: "MOBILISE", days: "Days 31-60", color: "gold", items: ["District demonstrations", "Coach training", "Referee education", "Athlete profiles", "Practice hub establishment"] },',
  '                { phase: "MEASURE", days: "Days 61-90", color: "dark-green", items: ["Assessment camps", "Call-room simulation", "Event calendar", "Classification sessions", "National pathway dossiers"] }].map((p) => (',
  '                <div key={p.phase} className="rounded-xl border border-border overflow-hidden">',
  '                  <div className={"bg-" + p.color + " px-6 py-4 flex items-center justify-between"}>',
  '                    <h3 className="text-[20px] font-bold text-white">{p.phase}</h3>',
  '                    <span className="text-white/80 text-[14px]">{p.days}</span>',
  '                  </div>',
  '                  <div className="p-6 bg-ivory">',
  '                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">',
  '                      {p.items.map((item) => (',
  '                        <div key={item} className="flex items-center gap-2 text-[14px] text-text-secondary">',
  '                          <span className="h-1.5 w-1.5 rounded-full bg-current shrink-0" />{item}',
  '                        </div>',
  '                      ))}',
  '                    </div>',
  '                  </div>',
  '                </div>',
  '              ))}',
  '            </div>',
  '          </div>',
  '        </section>',
]);
console.log('90-Day Plan populated');

// ============================================================
// DEVELOPMENT PATHWAY
// ============================================================
appendToPage('app/development/page.tsx', [
  '        <section className="py-16 bg-white">',
  '          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">',
  '            <h2 className="text-[28px] font-bold text-forest mb-8">Athlete Development Pathway</h2>',
  '            <div className="space-y-4">',
  '              {["Community", "Identify", "Develop", "Classify", "Compete", "State", "National", "International", "Paralympic"].map((stage, i) => (',
  '                <div key={stage} className="flex items-center gap-4">',
  '                  <div className="h-10 w-10 rounded-full bg-forest flex items-center justify-center text-white font-bold shrink-0">{i + 1}</div>',
  '                  <div className="rounded-xl bg-ivory border border-border p-4 flex-1">',
  '                    <h3 className="text-[16px] font-bold text-forest">{stage}</h3>',
  '                  </div>',
  '                </div>',
  '              ))}',
  '            </div>',
  '          </div>',
  '        </section>',
]);
console.log('Development Pathway populated');

