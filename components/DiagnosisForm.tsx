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
        <label htmlFor="nickname" className="block text-xs text-text-dim mb-1.5 tracking-wider">
          ニックネーム
        </label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
          placeholder="例：さくら"
          required
          className="w-full px-4 py-3 rounded-lg bg-bg-input border border-white/5 text-text placeholder:text-text-dim/40 focus:outline-none focus:border-gold/30 transition-colors text-sm"
        />
      </div>

      <div>
        <label htmlFor="birthday" className="block text-xs text-text-dim mb-1.5 tracking-wider">
          生年月日
        </label>
        <input
          type="date"
          id="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          min="1940-01-01"
          max="2010-12-31"
          required
          className="w-full px-4 py-3 rounded-lg bg-bg-input border border-white/5 text-text focus:outline-none focus:border-gold/30 transition-colors text-sm"
        />
      </div>

      <button type="submit" className="btn-gold w-full py-4 text-sm cursor-pointer tracking-wider">
        暦占術で診断する
      </button>

      <p className="text-text-dim/40 text-[10px] text-center tracking-wider">
        無料・登録不要・30秒で完了
      </p>
    </form>
  );
}
