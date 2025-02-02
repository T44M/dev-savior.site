export const linuxCommands = [
  {
    id: 'grep',
    category: 'Linux',
    command: 'grep',
    description: 'ファイル内の文字列検索',
    tags: ['検索', 'テキスト処理'],
    examples: [
      {
        cmd: 'grep "error" error.log',
        description: 'エラーログから"error"という文字列を検索'
      },
      {
        cmd: 'grep -i "warning" error.log',
        description: '大文字小文字を区別せずに"warning"を検索'
      },
      {
        cmd: 'grep -n "fail" error.log',
        description: '行番号付きで検索結果を表示'
      }
    ]
  },
  {
    id: 'find',
    category: 'Linux',
    command: 'find',
    description: 'ファイルやディレクトリの検索',
    tags: ['検索', 'ファイル操作'],
    examples: [
      {
        cmd: 'find . -name "*.log"',
        description: 'カレントディレクトリ以下のログファイルを検索'
      },
      {
        cmd: 'find . -type f -mtime +30',
        description: '30日以上前のファイルを検索'
      }
    ]
  },
  {
    id: 'sed',
    category: 'Linux',
    command: 'sed',
    description: 'テキストの置換や編集',
    tags: ['テキスト処理', '編集'],
    examples: [
      {
        cmd: "sed 's/old/new/' file.txt",
        description: 'ファイル内の文字列を置換（最初の1つ）'
      },
      {
        cmd: "sed 's/old/new/g' file.txt",
        description: 'ファイル内の文字列を全て置換'
      }
    ]
  },
  {
    id: 'awk',
    category: 'Linux',
    command: 'awk',
    description: 'テキスト処理と分析',
    tags: ['テキスト処理', '分析'],
    examples: [
      {
        cmd: "awk '{print $1}' file.txt",
        description: '各行の1列目を表示'
      },
      {
        cmd: "awk '{print $1,$3}' file.txt",
        description: '1列目と3列目を表示'
      }
    ]
  },
  {
    id: 'tar',
    category: 'Linux',
    command: 'tar',
    description: 'ファイルのアーカイブ',
    tags: ['圧縮', 'アーカイブ'],
    examples: [
      {
        cmd: 'tar -cf archive.tar dir/',
        description: 'ディレクトリをアーカイブ'
      },
      {
        cmd: 'tar -xf archive.tar',
        description: 'アーカイブを展開'
      }
    ]
  },
  {
    id: 'ps',
    category: 'Linux',
    command: 'ps',
    description: 'プロセスの状態表示',
    tags: ['プロセス管理', 'モニタリング'],
    examples: [
      {
        cmd: 'ps aux',
        description: '全プロセスの詳細表示'
      },
      {
        cmd: 'ps -ef',
        description: '全プロセスをフル表示'
      }
    ]
  },
  {
    id: 'netstat',
    category: 'Linux',
    command: 'netstat',
    description: 'ネットワーク接続の状態表示',
    tags: ['ネットワーク', 'モニタリング'],
    examples: [
      {
        cmd: 'netstat -a',
        description: '全ての接続を表示'
      },
      {
        cmd: 'netstat -t',
        description: 'TCP接続のみ表示'
      }
    ]
  },
  {
    id: 'df',
    category: 'Linux',
    command: 'df',
    description: 'ディスク使用量の表示',
    tags: ['ディスク', 'モニタリング'],
    examples: [
      {
        cmd: 'df -h',
        description: '人間が読みやすい形式で表示'
      },
      {
        cmd: 'df -T',
        description: 'ファイルシステムの種類も表示'
      }
    ]
  },
  {
    id: 'du',
    category: 'Linux',
    command: 'du',
    description: 'ディレクトリのサイズ表示',
    tags: ['ディスク', 'ファイル操作'],
    examples: [
      {
        cmd: 'du -h',
        description: '人間が読みやすい形式で表示'
      },
      {
        cmd: 'du -s',
        description: '合計サイズのみ表示'
      }
    ]
  },
  {
    id: 'lsof',
    category: 'Linux',
    command: 'lsof',
    description: '開いているファイルの表示',
    tags: ['プロセス管理', 'ファイル操作'],
    examples: [
      {
        cmd: 'lsof -i',
        description: 'ネットワーク接続を表示'
      },
      {
        cmd: 'lsof -u username',
        description: '指定ユーザのファイルを表示'
      }
    ]
  },
      {
    id: 'ls',
    category: 'Linux',
    command: 'ls',
    description: 'ファイル一覧の表示',
    tags: ['ファイル操作'],
    examples: [
      {
        cmd: 'ls -ltrh',
        description: '詳細一覧を新しい順で、サイズを人間が読みやすい形式で表示'
      },
      {
        cmd: 'ls -lahR',
        description: '隠しファイルを含む詳細一覧をサブディレクトリも含めて表示'
      },
      {
        cmd: 'ls -lS',
        description: 'サイズ順で詳細一覧を表示'
      }
    ]
  },
  {
    id: 'cp',
    category: 'Linux',
    command: 'cp',
    description: 'ファイルやディレクトリのコピー',
    tags: ['ファイル操作'],
    examples: [
      {
        cmd: 'cp file1 file2',
        description: 'ファイルをコピー'
      },
      {
        cmd: 'cp -r dir1 dir2',
        description: 'ディレクトリをコピー'
      }
    ]
  },
  {
    id: 'mv',
    category: 'Linux',
    command: 'mv',
    description: 'ファイルやディレクトリの移動・名前変更',
    tags: ['ファイル操作'],
    examples: [
      {
        cmd: 'mv file1 file2',
        description: 'ファイル名を変更'
      },
      {
        cmd: 'mv file dir/',
        description: 'ファイルをディレクトリに移動'
      }
    ]
  },
  {
    id: 'rm',
    category: 'Linux',
    command: 'rm',
    description: 'ファイルやディレクトリの削除',
    tags: ['ファイル操作'],
    examples: [
      {
        cmd: 'rm file',
        description: 'ファイルを削除'
      },
      {
        cmd: 'rm -r dir',
        description: 'ディレクトリを削除'
      }
    ]
  },
  {
    id: 'chmod',
    category: 'Linux',
    command: 'chmod',
    description: 'ファイルのパーミッション変更',
    tags: ['ファイル操作', 'セキュリティ'],
    examples: [
      {
        cmd: 'chmod 755 file',
        description: '実行権限を付与'
      },
      {
        cmd: 'chmod 644 file',
        description: '一般的なファイルの権限に設定'
      }
    ]
  },
  {
    id: 'chown',
    category: 'Linux',
    command: 'chown',
    description: 'ファイルの所有者変更',
    tags: ['ファイル操作', 'セキュリティ'],
    examples: [
      {
        cmd: 'chown user file',
        description: '所有者を変更'
      },
      {
        cmd: 'chown user:group file',
        description: '所有者とグループを変更'
      }
    ]
  },
  {
    id: 'top',
    category: 'Linux',
    command: 'top',
    description: 'プロセスの動的な状態表示',
    tags: ['プロセス管理', 'モニタリング'],
    examples: [
      {
        cmd: 'top',
        description: 'システム状態をリアルタイム表示'
      },
      {
        cmd: 'top -u username',
        description: '特定ユーザのプロセスを表示'
      }
    ]
  },
  {
    id: 'date',
    category: 'Linux',
    command: 'date',
    description: '日付と時刻の表示・設定',
    tags: ['システム管理'],
    examples: [
      {
        cmd: 'date',
        description: '現在の日時を表示'
      },
      {
        cmd: 'date "+%Y-%m-%d"',
        description: 'YYY-MM-DD形式で日付を表示'
      }
    ]
  },
  {
    id: 'tail',
    category: 'Linux',
    command: 'tail',
    description: 'ファイルの末尾を表示',
    tags: ['テキスト処理', 'ログ'],
    examples: [
      {
        cmd: 'tail -f log',
        description: 'ログをリアルタイムに表示'
      },
      {
        cmd: 'tail -n 100 log',
        description: '最後の100行を表示'
      }
    ]
  },
  {
    id: 'head',
    category: 'Linux',
    command: 'head',
    description: 'ファイルの先頭を表示',
    tags: ['テキスト処理'],
    examples: [
      {
        cmd: 'head file',
        description: '先頭10行を表示'
      },
      {
        cmd: 'head -n 5 file',
        description: '先頭5行を表示'
      }
    ]
  }
]