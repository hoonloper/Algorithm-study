package org.example.topcoder.bruteforce;

public class Five_FriendScore {
    public static void main(String[] args) {
//        String[] friends = {"NNN", "NNN", "NNN"};
//        String[] friends = {"NYNNN", "YNYNN", "NYNYN", "NNYNY", "NNNYN"};
        String[] friends = {"NYN", "YNY", "YYN"};
        int answer = highestScore(friends);

        System.out.println(answer);
    }

    private static int highestScore(String[] friends) {
        int ans = 0;
        int n = friends[0].length();

        for(int i = 0; i < n; i++) {
            int cnt = 0;

            for(int j = 0; j < n; j++) {
                if(i == j) continue;

                if(friends[i].charAt(j) == 'Y') {
                    cnt++;
                } else {
                    for(int k = 0; k < n; k++) {
                        if(friends[j].charAt(k) == 'Y' && friends[k].charAt(i) == 'Y') {
                            cnt++;
                            break;
                        }
                    }
                }
            }
            ans = Math.max(ans, cnt);
        }
        return ans;
    }
}
