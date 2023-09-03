package org.example.topcoder.bruteforce;

public class Eight_DFS_CrazyRobot {
    public static void main(String[] args) {
        double answer = getProbability(14, 25,  25,  25, 25);
        System.out.println(answer);
    }

    static boolean[][] grid = new boolean[100][100];
    static int[] vx = new int[] {0, 1, 0, -1};
    static int[] vy = new int[] {1, 0, -1, 0};
    static double[] prop = new double[4];
    private static double getProbability(int n, int east, int west, int south, int north) {
        prop[0] = east / 100.0;
        prop[1] = west / 100.0;
        prop[2] = south / 100.0;
        prop[3] = north / 100.0;
        return dfs(50, 50, n);
    }

    private static double dfs(int x, int y, int n) {
        if(grid[x][y]) return 0;
        if(n == 0) return 1;

        grid[x][y] = true;
        double ret = 0;
        for(int i = 0; i < 4; i++) {
            ret += dfs(x + vx[i], y + vy[i], n - 1) * prop[i];
        }
        grid[x][y] = false;
        return ret;
    }
}
