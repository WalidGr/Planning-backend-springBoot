package com.sagem.services;

import com.sagem.dao.PlanningRepository;
import com.sagem.entity.Planning;
import com.sagem.model.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

@Service
public class PlanningService {
    @Autowired
    private PlanningRepository planningRepository;

    public MessageResponse save(Planning planning) {

        List<Planning> list = planningRepository.findByDate(planning.getDate_debut(), planning.getDate_fin());

        if(!list.isEmpty()) {
            return  new MessageResponse(false, "Attention", "Date debut ou fin non valid");
        }


        Calendar calendar = Calendar.getInstance();
        calendar.setTime(planning.getDate_debut());

        if(calendar.get(Calendar.DAY_OF_WEEK)!= Calendar.MONDAY) {
            return  new MessageResponse(false, "Attention", "Date debut doit etre un lundi");
        }
        calendar.setTime(planning.getDate_fin());
        if(calendar.get(Calendar.DAY_OF_WEEK)!= Calendar.SUNDAY) {
            return  new MessageResponse(false, "Attention", "Date fin doit etre un dimanche");
        }
        planningRepository.save(planning);
        return  new MessageResponse(true, "Succès", "Opération effectuée");
    }
}
