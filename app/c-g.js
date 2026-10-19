// Правила для первых 22 уроков (у новых правило записано в самом уроке).
(function () {
  const G = {
    "a1-1": "Present Simple: I wake up, I drink — так говорят о том, что делаешь каждый день.",
    "a1-2": "He / she / it + -s: Anna goes, she asks, it costs. Для I / you / we / they — без -s.",
    "a1-3": "Be: I am, he / she is, we / they are. My mother is a doctor.",
    "a1-4": "Погода через it: It's cold. It's windy. It's raining — идёт дождь.",
    "a1-5": "Need — нужно: I need bread. Не нужно: I don't need it.",
    "a1-6": "Предлоги места: in the room — в комнате, on the wall — на стене, next to the bed — рядом с кроватью.",
    "a1-7": "Отрицание: I don't work, she doesn't work. После don't / doesn't глагол без -s.",
    "a1-8": "Вопрос в Present Simple: Do you cook? Does she cook? Ответ: Yes, I do / No, she doesn't.",
    "a2-1": "Past Simple неправильных глаголов: swim → swam, go → went, see → saw. Их надо запомнить.",
    "a2-2": "Have to — приходится, нужно: I have to get up early. She has to work.",
    "a2-3": "Болезни: I have a headache, I have a cold, I feel ill. What's the matter? — Что случилось?",
    "a2-4": "Фразовые глаголы: pack — упаковать, unpack — распаковать, move in — въехать.",
    "a2-5": "Прошлое правильных глаголов: decide → decided, bake → baked, shout → shouted.",
    "a2-6": "Afraid of + существительное или -ing: I'm afraid of busy roads. I'm afraid of driving.",
    "a2-7": "Отрицание в прошлом: I didn't notice. После didn't глагол в первой форме: didn't find (не found).",
    "a2-8": "Less — меньше (неисчисляемое): less sugar. More — больше: more vegetables.",
    "b1-1": "Present Perfect Continuous + since: I have been working from home since last year — работаю с прошлого года и до сих пор.",
    "b1-2": "Past Perfect — раньше другого прошлого: He had missed his train — он (до этого) опоздал на поезд.",
    "b1-3": "Spend on: I spend money on coffee — трачу на кофе. Save — копить, экономить.",
    "b1-4": "Пассив: I was offered a job — мне предложили работу. It meant leaving — это означало уехать.",
    "b1-5": "Compared to — по сравнению с: Compared to films, books are slower but deeper.",
    "b1-6": "On my own = alone — сам(а), в одиночку. Lonely — одиноко (чувство), alone — один (факт)."
  };
  window.LESSONS.forEach(l => { if (!l.g && G[l.id]) l.g = G[l.id]; });
})();
