package org.example.topcoder.bruteforce;

public class Six_DFS {
    public static void main(String[] args) {
        dfs(1);
    }

    private static int dfs(int now) {
        if(now가 끝나는 조건) return 현재now의값;
        int ret = -1;
        for(int i = 0; i < 다음상태개수; i++) {
            int next = i번째다음상태;
            if(next가조건을만족하는경우) ret = Math.max(dfs(ret), ret);
        }
        return ret;
    }
}
