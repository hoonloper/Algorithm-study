package org.example.level1;

import java.util.Arrays;

class Solution {

    private int MAX_HEALTH_POINT;
    private int currentHealthPoint;
    private int turn;
    private int currentTime;
    private int healingTime;

    public int solution(int[] bandage, int health, int[][] attacks) {
        this.MAX_HEALTH_POINT = health;
        this.currentHealthPoint = health;
        this.turn = 0;
        this.currentTime = 0;
        this.healingTime = 0;

        int lastAttackTime = attacks[attacks.length - 1][0];

        while (lastAttackTime >= currentTime) {
            if (turn < attacks.length && currentTime == attacks[turn][0]) {
                if (checkDied()) {
                    return -1;
                }

                minusHealthPoint(attacks[turn][1]);
                initHealingTime();
                nextTurn();
            } else {
                plusHealingTime();
                if (healingTime == bandage[0]) {
                    plusHealthPoint(bandage[1] + bandage[2]);
                    initHealingTime();
                } else {
                    plusHealthPoint(bandage[1]);
                }
            }

            if (checkDied()) {
                return -1;
            }

            plusCurrentTime();
        }

        return this.currentHealthPoint;
    }

    private void nextTurn() {
        this.turn++;
    }

    private void plusCurrentTime() {
        this.currentTime++;
    }

    private void plusHealingTime() {
        this.healingTime++;
    }

    private void initHealingTime() {
        this.healingTime = 0;
    }

    private void minusHealthPoint(int damage) {
        this.currentHealthPoint -= damage;
    }

    private boolean checkDied() {
        return this.currentHealthPoint <= 0;
    }

    private void plusHealthPoint(int healthPoint) {
        currentHealthPoint = Math.min(currentHealthPoint + healthPoint, MAX_HEALTH_POINT);
    }
}
