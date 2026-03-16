'use client';

import { useState } from 'react';

interface DiagnosisFormProps {
  onSubmit: (nickname: string, year: number, month: number, day: number) => void;
}

export default function DiagnosisForm({ onSubmit }: DiagnosisFormProps) {
  const [nickname, setNickname] = useState('');
  const [birthday, setBirthday] = useState('2001-03-14');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert('ニックネームを入力してください');
      return;
    }
    if (!birthday) {
      alert('生年月日を入力してください');
      return;
    }
    const [year, month, day] = birthday.split('-').map(Number);
    onSubmit(nickname.trim(), year, month, day);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto space-y-5">
      <div>
        <label htmlFor="nickname" className="block text-xs text-gold-dim mb-2 tracking-wider font-serif">
          <span className="text-gold mr-1">★</span>おなまえ<span className="text-rose-pale text-[10px] ml-2">必須</span>
        </label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
          placeholder="あなたの名前を入力してください"
          required
          className="w-full px-4 py-3.5 rounded-xl bg-bg-input border border-gold/15 text-text placeholder:text-text-dim/30 focus:outline-none focus:border-gold/40 focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all text-sm"
        />
      </div>

      <div>
        <label htmlFor="birthday" className="block text-xs text-gold-dim mb-2 tracking-wider font-serif">
          <span className="text-gold mr-1">★</span>生年月日<span className="text-rose-pale text-[10px] ml-2">必須</span>
        </label>
        <input
          type="date"
          id="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          min="1940-01-01"
          max="2010-12-31"
          required
          className="w-full px-4 py-3.5 rounded-xl bg-bg-input border border-gold/15 text-text focus:outline-none focus:border-gold/40 focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all text-sm"
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-gold w-full py-5 text-lg cursor-pointer">
          無料で占う
        </button>
      </div>

      <p className="text-text-dim/30 text-[10px] text-center tracking-wider">
        ※ 個人情報はブラウザ内のみに保存され、サーバーには送信されません
      </p>
    </form>
  );
}
