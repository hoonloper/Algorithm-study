package org.example.topcoder.bruteforce;

import java.util.Queue;

public class Seven_BFS {
    public static void main(String[] args) {
        bfs(1);
    }

    private static int bfs(int now) {
        Queue<T> q;
        q.push(now);
        while (!q.empty()) {
            T now = q.front(); q.pop();
            현재상태를저장합니다
            for(int i = 0; i< 다음상태개수; i++) {
                T next = i번째다음상태;
                if(next를 방문했었는지 판정) {
                    q.push(next);
                }
            }
        }
    }
}
